import { GHOST_BASE_URL, GHOST_CONTENT_API_KEY } from '$env/static/private';
import type { GhostPost } from '$lib';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const { slug } = params;

	const post = {
		id: 1,
		title: 'Building Modern Test Automation Frameworks',
		excerpt:
			'A comprehensive guide to creating robust, scalable test automation frameworks using modern tools and best practices.',
		date: '2024-01-15',
		category: 'Testing',
		readTime: '8 min read',
		tags: ['Playwright', 'Testing', 'Automation', 'QA']
	};

	const response = await fetch(
		`${GHOST_BASE_URL}/ghost/api/content/posts/slug/${slug}?key=${GHOST_CONTENT_API_KEY}&include=authors,tags&limit=100`
	);

	if (response.ok) {
		const { posts: ghostPosts }: { posts: GhostPost[] } = await response.json();
		return { post, ghostPost: ghostPosts[0] };
	}

	return { post };
}) satisfies PageServerLoad;
