<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const posts = [
		{
			title: 'Building Scalable Microservices with Node.js',
			category: 'Tutorial',
			readTime: '8 min',
			snippet:
				'A comprehensive guide to architecting microservices that can handle enterprise-level traffic...',
			link: '/blog/building-scalable-microservices-with-nodejs'
		},
		{
			title: 'Introducing QAura CLI v2.0',
			category: 'Project',
			readTime: '5 min',
			snippet:
				'Excited to announce the latest version of our testing automation tool with new features...',
			link: '/blog/introducing-qaura-cli-v2'
		},
		{
			title: 'The Future of Software Testing',
			category: 'Thoughts',
			readTime: '6 min',
			snippet: 'Reflecting on how AI and automation are transforming the testing landscape...',
			link: '/blog/the-future-of-software-testing'
		}
	];
</script>

<section class="bg-slate-800/50 py-20 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Latest Insights
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-400">
				Recent thoughts, tutorials, and project updates from my blog
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each posts as { title, category, readTime, snippet, link }}
				<article
					class="group overflow-hidden rounded-xl border border-blue-500/20 bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
				>
					<div class="p-6">
						<div class="mb-3 flex items-center justify-between">
							<span class="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
								{category}
							</span>
							<span class="text-xs text-slate-500">
								{readTime} read
							</span>
						</div>
						<h3
							class="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300"
						>
							{title}
						</h3>
						<p class="mb-4 text-sm text-slate-400">
							{snippet}
						</p>
						<a href={link} class="text-sm font-medium text-blue-400 group-hover:text-blue-300">
							Read more <ArrowRight
								class="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1"
							/>
						</a>
					</div>
				</article>
			{/each}
		</div>
		<div class="mt-12 text-center">
			<a
				href="/blog"
				class="group inline-flex items-center font-semibold text-blue-400 transition-colors hover:text-blue-300"
				>Read All Posts <ArrowRight
					class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>
