import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db, posts } from '$lib/db/index.js';
import type { RequestHandler } from './$types.js';

// GET /api/posts - List all blog posts
export const GET: RequestHandler = async ({ url }) => {
	try {
		const publishedOnly = url.searchParams.get('published') === 'true';
		
		let query = db.select().from(posts);
		
		if (publishedOnly) {
			query = query.where(eq(posts.published, true));
		}
		
		const allPosts = await query.orderBy(posts.createdAt);
		
		return json(allPosts);
	} catch (error) {
		console.error('Failed to fetch posts:', error);
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
};

// POST /api/posts - Create new blog post
export const POST: RequestHandler = async ({ request }) => {
	try {
		const { title, slug, content, author, published } = await request.json();

		// Basic validation
		if (!title || !slug || !content) {
			return json({ error: 'Title, slug, and content are required' }, { status: 400 });
		}

		// Check if slug already exists
		const existingPost = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
		if (existingPost.length > 0) {
			return json({ error: 'A post with this slug already exists' }, { status: 409 });
		}

		const newPost = await db
			.insert(posts)
			.values({
				title,
				slug,
				content,
				author: author || null,
				published: published || false
			})
			.returning();

		return json(newPost[0], { status: 201 });
	} catch (error) {
		console.error('Failed to create post:', error);
		return json({ error: 'Failed to create post' }, { status: 500 });
	}
};