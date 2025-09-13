<script lang="ts">
	import CodeXml from '@lucide/svelte/icons/code-xml';
	import ChartLine from '@lucide/svelte/icons/chart-line';
	import Activity from '@lucide/svelte/icons/activity';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
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
			<div
				class="group rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 transition-transform duration-300 group-hover:scale-110"
				>
					<CodeXml class="h-6 w-6 text-white" />
				</div>
				<h3
					class="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-300"
				>
					QAura CLI
				</h3>
				<p class="mb-4 text-slate-400">
					Powerful testing automation tool built with Node.js and TypeScript
				</p>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">Node.js</span>
					<span class="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">TypeScript</span
					>
					<span class="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">CLI</span>
				</div>
			</div>
			<div
				class="group rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 transition-transform duration-300 group-hover:scale-110"
				>
					<ChartLine class="h-6 w-6 text-white" />
				</div>
				<h3
					class="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-teal-300"
				>
					Smart Home Dashboard
				</h3>
				<p class="mb-4 text-slate-400">
					Comprehensive home automation system with real-time monitoring
				</p>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-teal-500/20 px-2 py-1 text-xs text-teal-300">React</span>
					<span class="rounded-full bg-teal-500/20 px-2 py-1 text-xs text-teal-300">IoT</span>
					<span class="rounded-full bg-teal-500/20 px-2 py-1 text-xs text-teal-300">WebSockets</span
					>
				</div>
			</div>
			<div
				class="group rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-500 transition-transform duration-300 group-hover:scale-110"
				>
					<Activity class="h-6 w-6 text-white" />
				</div>
				<h3
					class="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300"
				>
					DevTools Monitor
				</h3>
				<p class="mb-4 text-slate-400">Open-source monitoring dashboard for development teams</p>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">Vue.js</span>
					<span class="rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">Python</span>
					<span class="rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">Docker</span>
				</div>
			</div>
		</div>
		<div class="mt-12 text-center">
			<a
				href="/projects"
				class="group inline-flex items-center font-semibold text-blue-400 transition-colors hover:text-blue-300"
				>View All Projects <ArrowRight
					class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>
