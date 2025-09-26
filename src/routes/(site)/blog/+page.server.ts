import { GHOST_BASE_URL, GHOST_CONTENT_API_KEY } from '$env/static/private';
import type { GhostPost } from '$lib';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(
		`${GHOST_BASE_URL}/ghost/api/content/posts?key=${GHOST_CONTENT_API_KEY}&include=authors,tags&limit=100`
	);

	const { posts: ghostPosts }: { posts: GhostPost[] } = await response.json();

	const posts = [
		{
			id: 1,
			title: 'Building Modern Test Automation Frameworks',
			excerpt:
				'A comprehensive guide to creating robust, scalable test automation frameworks using modern tools and best practices.',
			date: '2024-01-15',
			category: 'Testing',
			readTime: '8 min read',
			tags: ['Playwright', 'Testing', 'Automation', 'QA']
		},
		{
			id: 2,
			title: 'Microservices Architecture: Lessons Learned',
			excerpt:
				'Real-world insights from implementing microservices architecture in production environments.',
			date: '2024-01-10',
			category: 'Architecture',
			readTime: '12 min read',
			tags: ['Microservices', 'Architecture', 'DevOps', 'Scalability']
		},
		{
			id: 3,
			title: 'Smart Home Automation with IoT',
			excerpt:
				'How I built my smart home system using various IoT devices and custom automation scripts.',
			date: '2024-01-05',
			category: 'IoT',
			readTime: '10 min read',
			tags: ['IoT', 'Smart Home', 'Automation', 'Hardware']
		},
		{
			id: 4,
			title: 'TypeScript Best Practices for Large Applications',
			excerpt:
				'Essential TypeScript patterns and practices for maintaining large-scale applications.',
			date: '2023-12-28',
			category: 'Development',
			readTime: '15 min read',
			tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Development']
		},
		{
			id: 5,
			title: 'Quality Engineering in Agile Teams',
			excerpt:
				'Strategies for integrating quality engineering practices into agile development workflows.',
			date: '2023-12-20',
			category: 'Quality',
			readTime: '7 min read',
			tags: ['Quality Engineering', 'Agile', 'Testing', 'Process']
		},
		{
			id: 6,
			title: 'Container Orchestration with Kubernetes',
			excerpt:
				'A practical guide to deploying and managing containerized applications with Kubernetes.',
			date: '2023-12-15',
			category: 'DevOps',
			readTime: '14 min read',
			tags: ['Kubernetes', 'Docker', 'DevOps', 'Containers']
		}
	] as const;

	return {
		posts,
		ghostPosts
	};
}) satisfies PageServerLoad;
