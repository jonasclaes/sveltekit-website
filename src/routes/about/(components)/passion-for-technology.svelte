<script lang="ts">
	import Microchip from '@lucide/svelte/icons/microchip';
	import Users from '@lucide/svelte/icons/users';
	import Hammer from '@lucide/svelte/icons/hammer';

	const cards = [
		{
			title: 'Building Things',
			content: 'My love for software engineering and building things drives everything I do...',
			icon: Hammer
		},
		{
			title: 'Sharing Knowledge',
			content: 'I find great joy in helping others, watching people grow...',
			icon: Users
		},
		{
			title: 'Hardware Projects',
			content: 'In addition to software, I enjoy working on hardware projects...',
			icon: Microchip
		}
	] as const;
</script>

<section class="bg-slate-800/50 py-20 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Passion for Technology
			</h2>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
			{#each cards as { icon, title, content } (title)}
				<div class="group text-center">
					<div
						class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 transition-transform duration-300 group-hover:scale-110"
					>
						<svelte:component this={icon} class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-4 text-xl font-semibold text-white">{title}</h3>
					<p class="leading-relaxed text-slate-400">{content}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
