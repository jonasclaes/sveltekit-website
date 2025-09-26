<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	<title>Jonas Claes</title>
	<meta
		name="description"
		content="Software engineer passionate about building innovative solutions, sharing knowledge, and pushing the boundaries of technology."
	/>
</svelte:head>

<div class="min-h-screen">
	<main class="flex-1">
		{@render children?.()}
	</main>
</div>
