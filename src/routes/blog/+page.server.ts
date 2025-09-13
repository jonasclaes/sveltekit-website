import { getSdk } from '$lib/client';
import { isTruthy } from '$lib/filter';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { posts } = await getSdk().posts();

	console.log(posts);

	return {
		posts: posts.filter(isTruthy)
	};
}) satisfies PageServerLoad;
