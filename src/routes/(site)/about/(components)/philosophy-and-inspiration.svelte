<script lang="ts">
	import MessageSquareQuote from '@lucide/svelte/icons/message-square-quote';

	const quotes = [
		{
			quoteTitle: 'My Life Motto',
			quote: 'Build stuff, break stuff, but ultimately, learn from the experiences!',
			author: 'Jonas Claes',
			quoteCaption:
				"Throughout my journey, I've learned that breaking things is just as important as building them..."
		},
		{
			quoteTitle: 'Programming Philosophy',
			quote:
				'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
			author: 'Linus Torvalds',
			quoteCaption:
				"As Linus Torvalds once said, people who program do it because it's fun - and I couldn't agree more! This quote perfectly captures why I love what I do."
		}
	] as const;
</script>

<section class="py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Philosophy & Inspiration
			</h2>
		</div>
		<div class="grid gap-8 md:grid-cols-2">
			{#each quotes as { quoteTitle, quote, author, quoteCaption }}
				<div
					class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-8 text-center backdrop-blur-sm"
				>
					<div
						class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600"
					>
						<MessageSquareQuote class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-4 text-xl font-semibold text-blue-300">{quoteTitle}</h3>
					<blockquote class="mb-4 text-lg text-slate-300 italic">
						"{quote}"
					</blockquote>
					<p class="mb-3 text-sm text-slate-400">- {author}</p>
					<p class="text-sm text-slate-400">
						{quoteCaption}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
