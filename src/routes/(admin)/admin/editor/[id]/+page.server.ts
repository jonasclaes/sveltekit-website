import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db, posts } from '$lib/db/index.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ params }) => {
	const postId = parseInt(params.id);
	
	if (isNaN(postId)) {
		error(400, 'Invalid post ID');
	}

	try {
		const post = await db.select().from(posts).where(eq(posts.id, postId)).limit(1);
		
		if (post.length === 0) {
			error(404, 'Post not found');
		}

		return {
			post: post[0]
		};
	} catch (err) {
		console.error('Failed to load post:', err);
		error(500, 'Failed to load post');
	}
};