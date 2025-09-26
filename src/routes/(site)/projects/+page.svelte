<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const projects = [
		{
			id: 1,
			title: 'QAura Testing Platform',
			description:
				'A comprehensive testing platform that revolutionizes how teams approach quality assurance with intelligent test automation and reporting.',
			image:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
			technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
			category: 'Professional',
			status: 'In Development',
			github: '#',
			demo: '#'
		},
		{
			id: 2,
			title: 'Smart Home Automation System',
			description:
				'A complete IoT solution for home automation featuring custom sensors, intelligent scheduling, and mobile app control.',
			image:
				'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
			technologies: ['Python', 'Raspberry Pi', 'MQTT', 'React Native', 'InfluxDB'],
			category: 'IoT',
			status: 'Completed',
			github: 'https://github.com/jonasclaes',
			demo: '#'
		},
		{
			id: 3,
			title: 'Industrial PLC Integration Suite',
			description:
				'A robust integration platform for Siemens PLCs enabling real-time monitoring and control of industrial automation systems.',
			image:
				'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
			technologies: ['C#', '.NET Core', 'Siemens S7', 'SignalR', 'SQL Server'],
			category: 'Industrial',
			status: 'Completed',
			github: 'https://github.com/jonasclaes',
			demo: '#'
		},
		{
			id: 4,
			title: 'Microservices Testing Framework',
			description:
				'An open-source testing framework specifically designed for microservices architectures with contract testing and service virtualization.',
			image:
				'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
			technologies: ['Java', 'Spring Boot', 'Pact', 'Docker', 'Kubernetes'],
			category: 'Open Source',
			status: 'Active',
			github: 'https://github.com/jonasclaes',
			demo: '#'
		},
		{
			id: 5,
			title: 'DevOps Pipeline Orchestrator',
			description:
				'A comprehensive CI/CD pipeline management tool with advanced deployment strategies and infrastructure as code integration.',
			image:
				'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
			technologies: ['Go', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
			category: 'DevOps',
			status: 'In Development',
			github: 'https://github.com/jonasclaes',
			demo: '#'
		},
		{
			id: 6,
			title: 'Real-time Analytics Dashboard',
			description:
				'A high-performance analytics dashboard for monitoring application metrics with real-time data visualization and alerting.',
			image:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
			technologies: ['Vue.js', 'D3.js', 'Node.js', 'Elasticsearch', 'Redis'],
			category: 'Web App',
			status: 'Completed',
			github: 'https://github.com/jonasclaes',
			demo: '#'
		}
	];
	const categories = [
		'All',
		'Professional',
		'Open Source',
		'IoT',
		'Industrial',
		'DevOps',
		'Web App'
	];
</script>

<svelte:head>
	<title>Projects | Jonas Claes</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<section class="relative overflow-hidden py-20">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
		<div
			class="absolute top-0 right-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-500/30 opacity-70 mix-blend-multiply blur-xl filter"
		></div>
		<div
			class="absolute bottom-0 left-1/3 h-96 w-96 animate-pulse rounded-full bg-teal-500/20 opacity-70 mix-blend-multiply blur-xl filter delay-1000"
		></div>
		<div class="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-6 text-5xl font-bold md:text-6xl">
				<span
					class="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
					>Projects</span
				>
			</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300">
				A showcase of my work spanning professional projects, open-source contributions, IoT
				innovations, and industrial automation solutions.
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
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" id="projects-grid">
				{#each projects as project}
					<div
						class="group overflow-hidden rounded-xl border border-blue-500/20 bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-blue-400/40"
						data-category={project.category}
					>
						<div class="relative h-48 overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
						</div>
						<div class="p-6">
							<div class="mb-4 flex gap-2">
								<span
									class={`rounded-full px-3 py-1 text-sm font-medium ${
										{
											Professional: 'bg-blue-500/20 text-blue-300',
											'Open Source': 'bg-green-500/20 text-green-300',
											IoT: 'bg-cyan-500/20 text-cyan-300',
											Industrial: 'bg-blue-500/20 text-blue-300',
											DevOps: 'bg-orange-500/20 text-orange-300',
											'Web App': 'bg-teal-500/20 text-teal-300'
										}[project.category] || 'bg-slate-500/20 text-slate-300'
									}`}
								>
									{project.category}
								</span>
								<span
									class={`rounded-full px-3 py-1 text-sm font-medium ${
										{
											Completed: 'bg-green-500/20 text-green-300',
											'In Development': 'bg-cyan-500/20 text-cyan-300',
											Active: 'bg-blue-500/20 text-blue-300',
											Planning: 'bg-blue-500/20 text-blue-300'
										}[project.status] || 'bg-slate-500/20 text-slate-300'
									}`}
								>
									{project.status}
								</span>
							</div>
							<h3
								class="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300"
							>
								{project.title}
							</h3>
							<p class="mb-4 leading-relaxed text-slate-400">
								{project.description}
							</p>
							<div class="mb-6 flex flex-wrap gap-2">
								{#each project.technologies as tech}
									<span
										class="rounded bg-slate-700/50 px-2 py-1 text-xs font-medium text-slate-300"
									>
										{tech}
									</span>
								{/each}
							</div>
							<div class="flex gap-3">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-700/50 px-4 py-2 text-center font-medium text-slate-300 transition-all duration-300 hover:bg-slate-600/50 hover:text-white"
								>
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									</svg>
									Code
								</a>
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-2 text-center font-medium text-white transition-all duration-300 hover:from-blue-500 hover:to-teal-500"
								>
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									Demo
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-slate-800/50 py-20 backdrop-blur-sm">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2
					class="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent"
				>
					Project Impact
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-slate-400">
					Numbers that reflect the scope and impact of my work across different domains
				</p>
			</div>
			<div class="grid gap-8 md:grid-cols-4">
				{#each [{ value: '25+', text: 'Projects Completed' }, { value: '15+', text: 'Technologies Mastered' }, { value: '50+', text: 'Developers Helped' }, { value: '100K+', text: 'Lines of Code' }] as statistic}
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-teal-600"
						>
							<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 11H5m14-4H3m16 8H7m12 4H9"
								/>
							</svg>
						</div>
						<div class="mb-2 text-3xl font-bold text-white">{statistic.value}</div>
						<div class="text-slate-400">{statistic.text}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="relative overflow-hidden py-20">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30"></div>
		<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-4xl font-bold text-white">Let's Build Something Amazing</h2>
			<p class="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
				Have an interesting project in mind? I'm always excited to collaborate on innovative
				solutions and tackle challenging problems. Let's discuss how we can work together.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="mailto:jonas@jonasclaes.be"
					class="transform rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-teal-500 hover:shadow-blue-500/25"
					>Start a Conversation</a
				>
				<a
					href="https://github.com/jonasclaes"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full border-2 border-blue-400/50 px-8 py-4 font-semibold text-blue-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10"
					>View All Projects</a
				>
			</div>
		</div>
	</section>
</div>

<!-- <script is:inline>
    const filter = document.getElementById("category-filter");
    const cards = Array.from(
      document.querySelectorAll("#projects-grid [data-category]")
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
