<script lang="ts">
	import Cpu from '@lucide/svelte/icons/cpu';
	import Blocks from '@lucide/svelte/icons/blocks';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import CodeXml from '@lucide/svelte/icons/code-xml';

	const expertise = [
		{
			icon: CodeXml,
			title: 'Full-Stack Development',
			description: 'Node.js, React, TypeScript, Python'
		},
		{
			icon: CircleCheck,
			title: 'Quality Assurance',
			description: 'Test Automation, CI/CD, QAura'
		},
		{
			icon: Blocks,
			title: 'System Architecture',
			description: 'Microservices, Docker, Kubernetes'
		},
		{
			icon: Cpu,
			title: 'IoT & Hardware',
			description: 'Raspberry Pi, Industrial Automation'
		}
	] as const;
</script>

<section class="py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Expertise
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-400">
				Technologies and areas where I excel in building robust solutions
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each expertise as { icon, title, description }}
				<div class="group text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 transition-transform duration-300 group-hover:scale-110"
					>
						<svelte:component this={icon} class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">{title}</h3>
					<p class="text-sm text-slate-400">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
