import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db, posts } from '$lib/db/index.js';
import type { RequestHandler } from './$types.js';

// GET /api/posts/[slug] - Get single blog post by slug
export const GET: RequestHandler = async ({ params }) => {
	try {
		const { slug } = params;
		
		const post = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
		
		if (post.length === 0) {
			return json({ error: 'Post not found' }, { status: 404 });
		}
		
		return json(post[0]);
	} catch (error) {
		console.error('Failed to fetch post:', error);
		return json({ error: 'Failed to fetch post' }, { status: 500 });
	}
};