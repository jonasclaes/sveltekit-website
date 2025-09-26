<script lang="ts">
	import BlogPostEditor from '$lib/components/BlogPostEditor.svelte';
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	async function handleSave(postData: {
		title: string;
		slug: string;
		content: unknown;
		author?: string;
		published: boolean;
	}) {
		const response = await fetch(`/api/posts/id/${data.post.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.error || 'Failed to update post');
		}

		// Redirect back to this page to show updated data or to admin
		goto('/admin');
	}

	function handleCancel() {
		goto('/admin');
	}
</script>

<svelte:head>
	<title>Edit: {data.post.title} | Jonas Claes</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<BlogPostEditor post={data.post} {onSave} onCancel={handleCancel} />
</div>