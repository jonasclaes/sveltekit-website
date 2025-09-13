<script lang="ts">
	import { Menu } from '@lucide/svelte';

	const navLink = (href: string, label: string) => ({ href, label });
	const links = [
		navLink('/', 'Home'),
		navLink('/about', 'About'),
		navLink('/blog', 'Blog'),
		navLink('/projects', 'Projects')
	];
</script>

<header class="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-md">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between py-4">
			<a
				href="/"
				class="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 hover:from-blue-300 hover:via-teal-300 hover:to-cyan-300"
			>
				Jonas Claes
			</a>

			<nav class="hidden space-x-8 md:flex">
				{#each links as link}
					<a
						href={link.href}
						class="font-medium text-slate-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<a
				href="mailto:jonas@jonasclaes.be"
				class="hidden items-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-teal-500 hover:shadow-blue-500/25 md:inline-flex"
			>
				Get In Touch
			</a>

			<button
				id="mobile-menu-toggle"
				class="text-slate-300 transition-colors hover:text-white md:hidden"
				aria-label="Toggle navigation"
				aria-expanded="false"
				aria-controls="mobile-nav"
			>
				<Menu class="h-6 w-6" />
			</button>
		</div>

		<div id="mobile-nav" class="hidden border-t border-blue-500/20 py-4 md:hidden">
			<div class="flex flex-col space-y-4">
				{#each links as link}
					<a
						href={link.href}
						class="font-medium text-slate-300 transition-colors hover:text-blue-400"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="mailto:jonas@jonasclaes.be"
					class="rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-2 text-center font-medium text-white transition-all duration-300"
					>Get In Touch</a
				>
			</div>
		</div>
	</div>

	<!-- <script is:inline>
		const btn = document.getElementById('mobile-menu-toggle');
		const nav = document.getElementById('mobile-nav');
		if (btn && nav) {
			btn.addEventListener('click', () => {
				const willOpen = nav.classList.contains('hidden');
				nav.classList.toggle('hidden');
				btn.setAttribute('aria-expanded', String(willOpen));
			});
			nav.querySelectorAll('a').forEach((a) =>
				a.addEventListener('click', () => {
					nav.classList.add('hidden');
					btn.setAttribute('aria-expanded', 'false');
				})
			);
		}
	</script> -->
</header>
