/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '') // Remove special characters
		.replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Validate required fields for a blog post
 */
export function validatePost(title: string, slug: string, content: unknown): string[] {
	const errors: string[] = [];

	if (!title.trim()) {
		errors.push('Title is required');
	}

	if (!slug.trim()) {
		errors.push('Slug is required');
	}

	if (!content || (typeof content === 'object' && Object.keys(content).length === 0)) {
		errors.push('Content is required');
	}

	return errors;
}