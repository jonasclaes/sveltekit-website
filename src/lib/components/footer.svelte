<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import SiGithub from '@icons-pack/svelte-simple-icons/icons/SiGithub';
	import SiBluesky from '@icons-pack/svelte-simple-icons/icons/SiBluesky';
</script>

<footer class="border-t border-blue-500/20 bg-slate-900/90 backdrop-blur-md">
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-4">
			<div class="md:col-span-2">
				<h3
					class="mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent"
				>
					Jonas Claes
				</h3>
				<p class="mb-6 max-w-md text-slate-400">
					Software engineer passionate about building innovative solutions, sharing knowledge, and
					pushing the boundaries of technology.
				</p>
				<div class="flex space-x-4">
					<a
						href="mailto:jonas@jonasclaes.be"
						class="text-slate-400 transition-colors hover:text-blue-400"
						aria-label="Email"
					>
						<Mail class="h-6 w-6" />
					</a>
					<a
						href="https://github.com/jonasclaes"
						class="text-slate-400 transition-colors hover:text-blue-400"
						aria-label="GitHub"
					>
						<SiGithub size={24} />
					</a>
					<a
						href="https://linkedin.com/in/jonasclaes"
						class="text-slate-400 transition-colors hover:text-blue-400"
						aria-label="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="lucide lucide-linkedin-icon lucide-linkedin h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
							></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"
							></circle>
						</svg>
					</a>
					<a
						href="https://bsky.app/profile/jonasclaes.be"
						class="text-slate-400 transition-colors hover:text-blue-400"
						aria-label="Bluesky"
					>
						<SiBluesky size={24} />
					</a>
				</div>
			</div>

			<div>
				<h4 class="mb-4 font-semibold text-white">Quick Links</h4>
				<ul class="space-y-2">
					<li>
						<a href="/" class="text-slate-400 transition-colors hover:text-blue-400">Home</a>
					</li>
					<li>
						<a href="/about" class="text-slate-400 transition-colors hover:text-blue-400">About</a>
					</li>
					<li>
						<a href="/blog" class="text-slate-400 transition-colors hover:text-blue-400">Blog</a>
					</li>
					<li>
						<a href="/projects" class="text-slate-400 transition-colors hover:text-blue-400"
							>Projects</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-blue-500/20 pt-8 text-center">
			<p class="text-slate-400">
				Copyright {new Date().getFullYear()} Jonas Claes. All rights reserved.
			</p>
		</div>
	</div>
</footer>
