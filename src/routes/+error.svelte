<script lang="ts">
	import { page } from '$app/state';

	const getErrorMessage = () => {
		if (page.status === 404) {
			return "Oops, that page doesn't exist";
		}

		return page.error?.message;
	};

	const getErrorText = () => {
		if (page.status === 404) {
			return "The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.";
		}

		return;
	};
</script>

<svelte:head>
	<title>{page.error?.message} | Jonas Claes</title>
</svelte:head>

<section
	class="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4"
>
	<div class="max-w-2xl text-center">
		<div
			class="mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-8xl font-extrabold text-transparent"
		>
			{page.status}
		</div>
		<h1 class="mb-4 text-3xl font-bold text-white md:text-4xl">
			{getErrorMessage()}
		</h1>
		<p class="mb-8 text-slate-300">
			{getErrorText()}
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/"
				class="rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-teal-500 hover:shadow-blue-500/25"
				>Go to Home</a
			>
			<a
				href="/projects"
				class="rounded-full border-2 border-blue-400/50 px-8 py-4 font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10"
				>Explore Projects</a
			>
		</div>
	</div>
</section>
