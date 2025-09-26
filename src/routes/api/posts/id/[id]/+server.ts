import { json } from '@sveltejs/kit';
import { eq, sql } from 'drizzle-orm';
import { db, posts } from '$lib/db/index.js';
import type { RequestHandler } from './$types.js';

// PUT /api/posts/id/[id] - Update existing blog post
export const PUT: RequestHandler = async ({ params, request }) => {
	try {
		const { id } = params;
		const postId = parseInt(id);
		
		if (isNaN(postId)) {
			return json({ error: 'Invalid post ID' }, { status: 400 });
		}

		const { title, slug, content, author, published } = await request.json();

		// Basic validation
		if (!title || !slug || !content) {
			return json({ error: 'Title, slug, and content are required' }, { status: 400 });
		}

		// Check if slug already exists for a different post
		const existingPost = await db
			.select()
			.from(posts)
			.where(eq(posts.slug, slug))
			.limit(1);
			
		if (existingPost.length > 0 && existingPost[0].id !== postId) {
			return json({ error: 'A post with this slug already exists' }, { status: 409 });
		}

		const updatedPost = await db
			.update(posts)
			.set({
				title,
				slug,
				content,
				author: author || null,
				published: published || false,
				updatedAt: sql`CURRENT_TIMESTAMP`
			})
			.where(eq(posts.id, postId))
			.returning();

		if (updatedPost.length === 0) {
			return json({ error: 'Post not found' }, { status: 404 });
		}

		return json(updatedPost[0]);
	} catch (error) {
		console.error('Failed to update post:', error);
		return json({ error: 'Failed to update post' }, { status: 500 });
	}
};

// DELETE /api/posts/id/[id] - Delete blog post
export const DELETE: RequestHandler = async ({ params }) => {
	try {
		const { id } = params;
		const postId = parseInt(id);
		
		if (isNaN(postId)) {
			return json({ error: 'Invalid post ID' }, { status: 400 });
		}

		const deletedPost = await db.delete(posts).where(eq(posts.id, postId)).returning();

		if (deletedPost.length === 0) {
			return json({ error: 'Post not found' }, { status: 404 });
		}

		return json({ message: 'Post deleted successfully' });
	} catch (error) {
		console.error('Failed to delete post:', error);
		return json({ error: 'Failed to delete post' }, { status: 500 });
	}
};