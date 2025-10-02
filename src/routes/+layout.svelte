<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

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

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-100">
	<Header />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Footer />
</div>
