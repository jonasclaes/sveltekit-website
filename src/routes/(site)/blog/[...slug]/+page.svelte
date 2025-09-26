<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import BlogPostRenderer from '$lib/components/BlogPostRenderer.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Jonas Claes</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<section class="overflow-hidden bg-slate-800/30 py-12 backdrop-blur-sm">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<a
				href="/blog"
				class="mb-8 inline-flex items-center gap-2 text-blue-400 transition-colors duration-300 hover:text-blue-300"
			>
				<ArrowLeft class="h-4 w-4" />Back to Blog
			</a>

			<header class="mb-12 text-center">
				<div class="mb-6 flex items-center justify-center gap-4 flex-wrap">
					<span class="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
						{data.post.category}
					</span>
					<span class="text-slate-400">•</span>
					<span class="text-slate-400">{data.post.date}</span>
					<span class="text-slate-400">•</span>
					<span class="text-slate-400">{data.post.readTime}</span>
				</div>

				<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl">
					<span
						class="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
					>
						{data.post.title}
					</span>
				</h1>

				{#if data.post.author}
					<p class="text-slate-400">
						By <span class="text-white font-medium">{data.post.author}</span>
					</p>
				{/if}
			</header>

			<article class="prose prose-slate max-w-none">
				{#if data.post.content}
					<BlogPostRenderer content={data.post.content} />
				{:else}
					<div class="text-center py-12 text-slate-400">
						<p>This post is currently being migrated from the old system.</p>
						<p>Please check back later for the full content.</p>
					</div>
				{/if}
			</article>

			{#if data.post.tags && data.post.tags.length > 0}
				<footer class="mt-12 pt-8 border-t border-slate-700">
					<div class="flex flex-wrap gap-2">
						{#each data.post.tags as tag}
							<span class="rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-300">
								{tag}
							</span>
						{/each}
					</div>
				</footer>
			{/if}
		</div>
	</section>
</div>