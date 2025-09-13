<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	const categories = ['All', 'Testing', 'Architecture', 'IoT', 'Development', 'Quality', 'DevOps'];
</script>

<svelte:head>
	<title>Blog | Jonas Claes</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<section class="relative overflow-hidden py-20">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
		<div
			class="absolute top-0 left-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-500/30 opacity-70 mix-blend-multiply blur-xl filter"
		></div>
		<div
			class="absolute right-1/3 bottom-0 h-96 w-96 animate-pulse rounded-full bg-teal-500/20 opacity-70 mix-blend-multiply blur-xl filter delay-1000"
		></div>
		<div class="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-6 text-5xl font-bold md:text-6xl">
				<span
					class="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
					>Blog</span
				>
			</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300">
				Tutorials, insights, and thoughts on software development, quality engineering, and the
				latest technologies. Sharing knowledge and experiences from my journey.
			</p>
			<div class="mb-12 flex flex-wrap justify-center gap-3" id="category-filter">
				{#each categories as category}
					<button
						class="rounded-full border border-blue-500/20 bg-slate-800/50 px-6 py-3 font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:bg-slate-700/50"
						data-category={category}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" id="posts-grid">
				{#each data.posts as post (post.id)}
					<article
						class="group overflow-hidden rounded-xl border border-blue-500/20 bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-blue-400/40"
						data-category={post.category}
					>
						<div class="p-6">
							<div class="mb-4 flex items-center justify-between">
								<span
									class={`rounded-full px-3 py-1 text-sm font-medium ${
										{
											Testing: 'bg-blue-500/20 text-blue-300',
											Architecture: 'bg-teal-500/20 text-teal-300',
											IoT: 'bg-cyan-500/20 text-cyan-300',
											Development: 'bg-blue-500/20 text-blue-300',
											Quality: 'bg-green-500/20 text-green-300',
											DevOps: 'bg-orange-500/20 text-orange-300'
										}[post.category] || 'bg-slate-500/20 text-slate-300'
									}`}
								>
									{post.category}
								</span>
								<span class="text-sm text-slate-400">{post.date}</span>
							</div>
							<h2
								class="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300"
							>
								{post.title}
							</h2>
							<p class="mb-4 leading-relaxed text-slate-400">
								{post.excerpt}
							</p>
							<div class="mb-4 flex flex-wrap gap-2">
								{#each post.tags as tag}
									<span class="rounded bg-slate-700/50 px-2 py-1 text-xs text-slate-300">
										#{tag}
									</span>
								{/each}
							</div>
							<div class="flex items-center justify-between">
								<span class="text-sm text-slate-400">{post.readTime}</span>
								<span
									class="flex items-center gap-2 font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
								>
									Read More
									<ArrowRight
										class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
									/>
								</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="relative overflow-hidden bg-slate-800/50 py-20 backdrop-blur-sm">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30"></div>
		<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<div class="rounded-2xl border border-blue-500/20 bg-slate-800/80 p-8 backdrop-blur-sm">
				<h2 class="mb-4 text-3xl font-bold text-white">Stay Updated</h2>
				<p class="mx-auto mb-6 max-w-2xl text-slate-300">
					Get notified when I publish new tutorials, insights, and project updates. Join the
					community of developers who are passionate about quality and innovation.
				</p>
				<div class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
					<input
						type="email"
						placeholder="Enter your email"
						class="flex-1 rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors duration-300 focus:border-blue-400 focus:outline-none"
					/>
					<button
						class="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-teal-500 hover:shadow-blue-500/25"
						>Subscribe</button
					>
				</div>
				<p class="mt-4 text-sm text-slate-400">
					No spam, unsubscribe at any time. I respect your privacy.
				</p>
			</div>
		</div>
	</section>
</div>

<!-- <script is:inline>
    const filter = document.getElementById("category-filter");
    const cards = Array.from(
      document.querySelectorAll("#posts-grid [data-category]")
    );
    let selected = "All";
    function apply() {
      cards.forEach((card) => {
        const cat = card.getAttribute("data-category") || "All";
        const match = selected === "All" || selected === cat;
        card.classList.toggle("hidden", !match);
      });
      if (filter) {
        filter.querySelectorAll("button").forEach((btn) => {
          const isActive = btn.getAttribute("data-category") === selected;
          btn.classList.toggle("bg-gradient-to-r", isActive);
          btn.classList.toggle("from-blue-600", isActive);
          btn.classList.toggle("to-teal-600", isActive);
          btn.classList.toggle("text-white", isActive);
          btn.classList.toggle("shadow-lg", isActive);
        });
      }
    }
    if (filter) {
      filter.addEventListener("click", (e) => {
        const el = e.target;
        const target =
          el && el.closest ? el.closest("button[data-category]") : null;
        if (!target) return;
        selected = target.getAttribute("data-category") || "All";
        apply();
      });
    }
    apply();
  </script> -->
