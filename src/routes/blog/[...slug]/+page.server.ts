import { getSdk } from '$lib/client';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;

	const { posts } = await getSdk().post({ slug, locale: undefined });
	if (!posts || posts.length === 0) throw new Error('post not found');
	if (posts.length !== 1) throw new Error('more than one post found');

	const post = posts[0]!;

	return { post };
}) satisfies PageServerLoad;
