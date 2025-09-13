<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
</script>

<section class="bg-slate-800/50 py-20 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<h2
					class="mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-3xl font-bold text-transparent"
				>
					Education & Career
				</h2>
				<div class="space-y-6">
					<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-semibold text-blue-300">Bachelor's Degree</h3>
						<p class="mb-2 text-slate-300">Applied Computer Science</p>
						<p class="mb-2 text-sm text-slate-400">Specializing in Digital Innovation</p>
						<p class="mb-3 text-sm text-slate-400">Thomas More, Geel, Antwerpen, Belgium</p>
						<div class="mb-3 flex items-center gap-2">
							<span class="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-300"
								>Magna Cum Laude</span
							>
						</div>
						<p class="text-sm text-slate-400">
							Focused on learning by doing through real projects with real clients, gaining hands-on
							experience in software development and digital innovation.
						</p>
					</div>
					<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-semibold text-teal-300">Current Role</h3>
						<p class="mb-2 text-slate-300">Solutions Architect</p>
						<p class="mb-3 text-sm text-slate-400">QAura - Software Testing Startup</p>
						<p class="text-sm text-slate-400">
							Working on exciting innovations in the software testing world, architecting solutions
							that help teams deliver quality software faster.
						</p>
					</div>
				</div>
			</div>
			<div>
				<h2
					class="mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-3xl font-bold text-transparent"
				>
					Personal Information
				</h2>
				<div class="space-y-6">
					<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-semibold text-blue-300">Location</h3>
						<p class="text-slate-300">Genk, Limburg, Belgium 🇧🇪</p>
						<p class="mt-1 text-sm text-slate-400">Heart of Europe, working with global teams</p>
					</div>
					<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-semibold text-teal-300">Contact Information</h3>
						<div class="space-y-2">
							<div class="flex items-center gap-2">
								<Mail class="h-4 w-4 text-slate-400" />
								<a
									href="mailto:jonas@jonasclaes.be"
									class="text-slate-300 transition-colors hover:text-blue-300"
									>jonas@jonasclaes.be</a
								>
							</div>
							<div class="flex items-center gap-2">
								<PhoneCall class="h-4 w-4 text-slate-400" />
								<a
									href="tel:+32484238902"
									class="text-slate-300 transition-colors hover:text-blue-300">+32 484 23 89 02</a
								>
							</div>
						</div>
					</div>
					<div class="rounded-lg border border-blue-500/20 bg-slate-800/80 p-6 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-semibold text-cyan-300">Interests & Hobbies</h3>
						<div class="flex flex-wrap gap-2">
							{#each ['Software Engineering', 'Hardware Projects', 'Smart Homes', 'Open Source', 'Tech Blogging', 'Quality Assurance'] as interest}
								<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
									{interest}
								</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
