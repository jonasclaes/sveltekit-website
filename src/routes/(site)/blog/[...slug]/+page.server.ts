import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db, posts } from '$lib/db/index.js';
import type { PageServerLoad } from './$types.js';

export const load = (async ({ params }) => {
	const { slug } = params;

	try {
		// First try to get the post from the database
		const post = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);

		if (post.length > 0) {
			// Return the post from database
			return { 
				post: {
					id: post[0].id,
					title: post[0].title,
					content: post[0].content,
					author: post[0].author,
					date: new Date(post[0].createdAt).toISOString().split('T')[0],
					slug: post[0].slug,
					published: post[0].published,
					category: 'Blog', // Default category
					readTime: '5 min read', // Placeholder
					tags: [] // Could be added later
				}
			};
		}

		// Fallback to static content for existing routes
		const staticPosts: Record<string, any> = {
			'building-scalable-microservices-with-nodejs': {
				id: 1001,
				title: 'Building Modern Test Automation Frameworks',
				excerpt: 'A comprehensive guide to creating robust, scalable test automation frameworks using modern tools and best practices.',
				date: '2024-01-15',
				category: 'Testing',
				readTime: '8 min read',
				tags: ['Playwright', 'Testing', 'Automation', 'QA'],
				slug: 'building-modern-test-automation-frameworks',
				content: {
					time: Date.now(),
					blocks: [
						{
							id: "intro",
							type: "paragraph",
							data: {
								text: "A comprehensive guide to creating robust, scalable test automation frameworks using modern tools and best practices."
							}
						}
					],
					version: "2.28.2"
				}
			}
		};

		const staticPost = staticPosts[slug];
		if (staticPost) {
			return { post: staticPost };
		}

		// Post not found
		error(404, 'Post not found');
	} catch (err) {
		console.error('Failed to load post:', err);
		error(500, 'Failed to load post');
	}
}) satisfies PageServerLoad;
