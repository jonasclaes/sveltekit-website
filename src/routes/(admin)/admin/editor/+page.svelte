<script lang="ts">
	import BlogPostEditor from '$lib/components/BlogPostEditor.svelte';
	import { goto } from '$app/navigation';

	async function handleSave(postData: {
		title: string;
		slug: string;
		content: unknown;
		author?: string;
		published: boolean;
	}) {
		const response = await fetch('/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.error || 'Failed to create post');
		}

		const post = await response.json();
		
		// Redirect to the new post or back to admin
		goto(`/admin/editor/${post.id}`);
	}

	function handleCancel() {
		goto('/admin');
	}
</script>

<svelte:head>
	<title>Create New Post | Jonas Claes</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<BlogPostEditor onSave={handleSave} onCancel={handleCancel} />
</div>
