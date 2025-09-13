<script lang="ts">
	import CodeXml from '@lucide/svelte/icons/code-xml';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import Cloud from '@lucide/svelte/icons/cloud';
	import Database from '@lucide/svelte/icons/database';
	import Blocks from '@lucide/svelte/icons/blocks';
	import Cpu from '@lucide/svelte/icons/cpu';
</script>

<section class="py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Skills and Technologies
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-400">
				I'm always eager to learn and explore new technologies, so this list is ever-growing!
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 flex items-center text-xl font-semibold text-blue-300">
					<CodeXml class="mr-2 h-6 w-6" />Programming Languages
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['TypeScript', 'JavaScript', 'Go', 'Java', 'Python', 'C#'] as language}
						<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
							{language}
						</span>
					{/each}
				</div>
			</div>
			<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 flex items-center text-xl font-semibold text-teal-300">
					<CircleCheck class="mr-2 h-6 w-6" />Testing & Quality Assurance
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Jest', 'Mocha', 'Pact testing', 'Playwright', 'Cypress', 'Postman', 'RestAssured', 'Pytest', 'Selenium', 'ISTQB Foundation'] as tool}
						<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
							{tool}
						</span>
					{/each}
				</div>
			</div>
			<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 flex items-center text-xl font-semibold text-cyan-300">
					<Cloud class="mr-2 h-6 w-6" />DevOps & Infrastructure
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Linux', 'Docker', 'Podman', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Concourse CI', 'Ansible', 'Terraform', 'AWS CDK', 'Sentry'] as tool}
						<span class="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-300">
							{tool}
						</span>
					{/each}
				</div>
			</div>
			<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 flex items-center text-xl font-semibold text-green-300">
					<Database class="mr-2 h-6 w-6" />Databases & APIs
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Elasticsearch', 'PostgreSQL', 'SQLite', 'MySQL', 'Supabase', 'gRPC', 'REST APIs', 'GraphQL'] as tool}
						<span class="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-300">
							{tool}
						</span>
					{/each}
				</div>
			</div>
			<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 flex items-center text-xl font-semibold text-blue-300">
					<Blocks class="mr-2 h-6 w-6" />Architectures & Patterns
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['OOP', 'MVVM', 'MVC', 'Microservices', 'Hexagonal Architecture'] as pattern}
						<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
							{pattern}
						</span>
					{/each}
				</div>
			</div>
			<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
				<h3 class="mb-4 flex items-center text-xl font-semibold text-red-300">
					<Cpu class="mr-2 h-6 w-6" />Industrial Automation
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Siemens S7-300', 'Siemens S7-1200', 'Siemens S7-1500'] as tool}
						<span class="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-300">
							{tool}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
