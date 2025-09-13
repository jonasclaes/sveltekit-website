import type { PageServerLoad } from './$types';

export const load = (async () => {
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

	return { post };
}) satisfies PageServerLoad;
