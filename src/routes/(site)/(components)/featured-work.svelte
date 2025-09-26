<script lang="ts">
	import CodeXml from '@lucide/svelte/icons/code-xml';
	import ChartLine from '@lucide/svelte/icons/chart-line';
	import Activity from '@lucide/svelte/icons/activity';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const featuredWork = [
		{
			icon: CodeXml,
			title: 'QAura CLI',
			description: 'Powerful testing automation tool built with Node.js and TypeScript',
			technologies: ['Node.js', 'TypeScript', 'CLI'],
			technologyTagColor: 'blue',
			link: '/projects/qauracli'
		},
		{
			icon: ChartLine,
			title: 'Smart Home Dashboard',
			description: 'Comprehensive home automation system with real-time monitoring',
			technologies: ['React', 'IoT', 'WebSockets'],
			technologyTagColor: 'teal',
			link: '/projects/smarthome'
		},
		{
			icon: Activity,
			title: 'DevTools Monitor',
			description: 'Open-source monitoring dashboard for development teams',
			technologies: ['Vue.js', 'Python', 'Docker'],
			technologyTagColor: 'cyan',
			link: '/projects/devtoolsmonitor'
		}
	] as const;
</script>

<section class="bg-slate-800/50 py-20 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Featured Work
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-400">
				A selection of projects that showcase my passion for building innovative solutions
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredWork as { icon, title, description, technologies, technologyTagColor, link }}
				<div
					class="group rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 transition-transform duration-300 group-hover:scale-110"
					>
						<svelte:component this={icon} class="h-6 w-6 text-white" />
					</div>
					<h3
						class="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-300"
					>
						{title}
					</h3>
					<p class="mb-4 text-slate-400">
						{description}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each technologies as technology}
							<span
								class="rounded-full bg-{technologyTagColor}-500/20 px-2 py-1 text-xs text-{technologyTagColor}-300"
								>{technology}</span
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-12 text-center">
			<a
				href="/projects"
				class="group inline-flex items-center font-semibold text-blue-400 transition-colors hover:text-blue-300"
			>
				View All Projects <ArrowRight
					class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>
