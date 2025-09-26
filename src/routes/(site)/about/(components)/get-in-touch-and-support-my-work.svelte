<script lang="ts">
	import Heart from '@lucide/svelte/icons/heart';
	import Mail from '@lucide/svelte/icons/mail';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
</script>

<section class="relative overflow-hidden bg-slate-800/50 py-20 backdrop-blur-sm">
	<div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30"></div>
	<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-4xl font-bold text-white">Get in Touch & Support My Work</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
			If you have any questions, suggestions, or just want to say hello, feel free to reach out. If
			you find value in my content, consider supporting my work!
		</p>
		<div class="mb-8 grid gap-6 md:grid-cols-2">
			<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 text-lg font-semibold text-blue-300">Contact Me</h3>
				<div class="space-y-3">
					<a
						href="mailto:jonas@jonasclaes.be"
						class="flex items-center justify-center gap-2 text-slate-300 transition-colors hover:text-blue-300"
						><Mail class="h-5 w-5" />jonas@jonasclaes.be
					</a>
					<a
						href="tel:+32484238902"
						class="flex items-center justify-center gap-2 text-slate-300 transition-colors hover:text-blue-300"
						><PhoneCall class="h-5 w-5" />+32 484 23 89 02
					</a>
				</div>
			</div>
			<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 text-lg font-semibold text-teal-300">Support My Work</h3>
				<p class="mb-4 text-sm text-slate-400">
					If you find value in my content and would like to support my open-source work and
					community contributions.
				</p>
				<a
					href="https://github.com/sponsors/jonasclaes"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-teal-500 hover:to-blue-500"
					><Heart class="h-4 w-4" />Sponsor on GitHub</a
				>
			</div>
		</div>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="https://github.com/jonasclaes"
				target="_blank"
				rel="noopener noreferrer"
				class="transform rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-teal-500 hover:shadow-blue-500/25"
			>
				View GitHub Profile
			</a>
			<a
				href="https://linkedin.com/in/jonasclaes"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-full border-2 border-blue-400/50 px-8 py-4 font-semibold text-blue-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10"
				>Connect on LinkedIn</a
			>
		</div>
	</div>
</section>
