<script lang="ts">
	import CodeXml from '@lucide/svelte/icons/code-xml';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import Cloud from '@lucide/svelte/icons/cloud';
	import Database from '@lucide/svelte/icons/database';
	import Blocks from '@lucide/svelte/icons/blocks';
	import Cpu from '@lucide/svelte/icons/cpu';

	const skills = [
		{
			category: 'Programming Languages',
			icon: CodeXml,
			color: 'blue',
			items: ['TypeScript', 'JavaScript', 'Go', 'Java', 'Python', 'C#']
		},
		{
			category: 'Testing & Quality Assurance',
			icon: CircleCheck,
			color: 'teal',
			items: [
				'Jest',
				'Mocha',
				'Pact testing',
				'Playwright',
				'Cypress',
				'Postman',
				'RestAssured',
				'Pytest',
				'Selenium',
				'ISTQB Foundation'
			]
		},
		{
			category: 'DevOps & Infrastructure',
			icon: Cloud,
			color: 'cyan',
			items: [
				'Linux',
				'Docker',
				'Podman',
				'Kubernetes',
				'GitHub Actions',
				'GitLab CI',
				'Concourse CI',
				'Ansible',
				'Terraform',
				'AWS CDK',
				'Sentry'
			]
		},
		{
			category: 'Databases & APIs',
			icon: Database,
			color: 'green',
			items: [
				'Elasticsearch',
				'PostgreSQL',
				'SQLite',
				'MySQL',
				'Supabase',
				'gRPC',
				'REST APIs',
				'GraphQL'
			]
		},
		{
			category: 'Architectures & Patterns',
			icon: Blocks,
			color: 'blue',
			items: ['OOP', 'MVVM', 'MVC', 'Microservices', 'Hexagonal Architecture']
		},
		{
			category: 'Industrial Automation',
			icon: Cpu,
			color: 'red',
			items: ['Siemens S7-300', 'Siemens S7-1200', 'Siemens S7-1500']
		}
	] as const;
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
			{#each skills as { icon, category, color, items } (category)}
				<div class="rounded-xl border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
					<h3 class="mb-4 flex items-center text-xl font-semibold text-{color}-300">
						<svelte:component this={icon} class="mr-2 h-6 w-6" />{category}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each items as language}
							<span
								class="rounded-full bg-{color}-500/20 px-3 py-1 text-sm font-medium text-{color}-300"
							>
								{language}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
