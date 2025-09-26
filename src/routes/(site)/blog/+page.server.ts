import { eq } from 'drizzle-orm';
import { db, posts } from '$lib/db/index.js';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	try {
		// Get published posts from SQLite database
		const publishedPosts = await db
			.select()
			.from(posts)
			.where(eq(posts.published, true))
			.orderBy(posts.createdAt);

		// Transform posts to match the expected format for the existing UI
		const transformedPosts = publishedPosts.map((post) => ({
			id: post.id,
			title: post.title,
			excerpt: '', // We'll need to extract this from content later
			date: new Date(post.createdAt).toISOString().split('T')[0],
			category: 'Blog', // Default category for now
			readTime: '5 min read', // Placeholder - could be calculated
			tags: [], // Could be added to schema later
			slug: post.slug
		}));

		// Keep some static posts for now as fallback/examples
		const staticPosts = [
			{
				id: 1001,
				title: 'Building Modern Test Automation Frameworks',
				excerpt:
					'A comprehensive guide to creating robust, scalable test automation frameworks using modern tools and best practices.',
				date: '2024-01-15',
				category: 'Testing',
				readTime: '8 min read',
				tags: ['Playwright', 'Testing', 'Automation', 'QA'],
				slug: 'building-modern-test-automation-frameworks'
			},
			{
				id: 1002,
				title: 'Microservices Architecture: Lessons Learned',
				excerpt:
					'Real-world insights from implementing microservices architecture in production environments.',
				date: '2024-01-10',
				category: 'Architecture',
				readTime: '12 min read',
				tags: ['Microservices', 'Architecture', 'DevOps', 'Scalability'],
				slug: 'microservices-architecture-lessons-learned'
			},
			{
				id: 1003,
				title: 'Smart Home Automation with IoT',
				excerpt:
					'How I built my smart home system using various IoT devices and custom automation scripts.',
				date: '2024-01-05',
				category: 'IoT',
				readTime: '10 min read',
				tags: ['IoT', 'Smart Home', 'Automation', 'Hardware'],
				slug: 'smart-home-automation-with-iot'
			},
			{
				id: 1004,
				title: 'TypeScript Best Practices for Large Applications',
				excerpt:
					'Essential TypeScript patterns and practices for maintaining large-scale applications.',
				date: '2023-12-28',
				category: 'Development',
				readTime: '15 min read',
				tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Development'],
				slug: 'typescript-best-practices-for-large-applications'
			},
			{
				id: 1005,
				title: 'Quality Engineering in Agile Teams',
				excerpt:
					'Strategies for integrating quality engineering practices into agile development workflows.',
				date: '2023-12-20',
				category: 'Quality',
				readTime: '7 min read',
				tags: ['Quality Engineering', 'Agile', 'Testing', 'Process'],
				slug: 'quality-engineering-in-agile-teams'
			},
			{
				id: 1006,
				title: 'Container Orchestration with Kubernetes',
				excerpt:
					'A practical guide to deploying and managing containerized applications with Kubernetes.',
				date: '2023-12-15',
				category: 'DevOps',
				readTime: '14 min read',
				tags: ['Kubernetes', 'Docker', 'DevOps', 'Containers'],
				slug: 'container-orchestration-with-kubernetes'
			}
		];

		// Combine database posts with static posts
		const allPosts = [...transformedPosts, ...staticPosts];

		return {
			posts: allPosts
		};
	} catch (error) {
		console.error('Failed to load posts from database:', error);
		
		// Fallback to static posts if database fails
		const fallbackPosts = [
			{
				id: 1001,
				title: 'Building Modern Test Automation Frameworks',
				excerpt:
					'A comprehensive guide to creating robust, scalable test automation frameworks using modern tools and best practices.',
				date: '2024-01-15',
				category: 'Testing',
				readTime: '8 min read',
				tags: ['Playwright', 'Testing', 'Automation', 'QA'],
				slug: 'building-modern-test-automation-frameworks'
			}
		];

		return {
			posts: fallbackPosts
		};
	}
}) satisfies PageServerLoad;
