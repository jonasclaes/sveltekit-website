<script lang="ts">
	import type EditorJS from '@editorjs/editorjs';
	import { onMount } from 'svelte';
	import { generateSlug, validatePost } from '$lib/utils.js';
	import type { Post } from '$lib/db/index.js';

	interface Props {
		post?: Post;
		onSave: (postData: {
			title: string;
			slug: string;
			content: unknown;
			author?: string;
			published: boolean;
		}) => Promise<void>;
		onCancel?: () => void;
	}

	let { post, onSave, onCancel }: Props = $props();

	let editor = $state<EditorJS | null>(null);
	let editorElement: HTMLElement;
	let editorData = $state<unknown>(null);

	// Form fields
	let title = $state(post?.title || '');
	let slug = $state(post?.slug || '');
	let author = $state(post?.author || '');
	let published = $state(post?.published || false);
	let autoGenerateSlug = $state(!post?.slug);

	// UI state
	let isLoading = $state(false);
	let errors = $state<string[]>([]);

	// Auto-generate slug when title changes
	$effect(() => {
		if (autoGenerateSlug && title) {
			slug = generateSlug(title);
		}
	});

	onMount(async () => {
		try {
			const { default: EditorJS } = await import('@editorjs/editorjs');
			const { default: Header } = await import('@editorjs/header');
			const { default: List } = await import('@editorjs/list');
			const { default: Quote } = await import('@editorjs/quote');

			editor = new EditorJS({
				holder: editorElement,
				tools: {
					header: Header,
					list: List,
					quote: Quote
				},
				placeholder: "Let's write an awesome story!",
				data: post?.content || undefined,
				onChange: async () => {
					if (editor) {
						editorData = await editor.save();
					}
				}
			});

			editor.isReady.then(async () => {
				if (editor) {
					editorData = await editor.save();
				}
			});
		} catch (error) {
			console.error('Failed to load EditorJS:', error);
			errors = ['Failed to load editor'];
		}
	});

	async function handleSave() {
		if (!editor) return;

		isLoading = true;
		errors = [];

		try {
			const content = await editor.save();
			const validationErrors = validatePost(title, slug, content);

			if (validationErrors.length > 0) {
				errors = validationErrors;
				return;
			}

			await onSave({
				title: title.trim(),
				slug: slug.trim(),
				content,
				author: author.trim() || undefined,
				published
			});
		} catch (error) {
			console.error('Failed to save post:', error);
			errors = ['Failed to save post. Please try again.'];
		} finally {
			isLoading = false;
		}
	}

	function handleSlugEdit() {
		autoGenerateSlug = false;
	}
</script>

<div class="mx-auto max-w-4xl space-y-6 p-6">
	<div class="flex items-center justify-between">
		<h1 class="text-3xl font-bold text-white">
			{post ? 'Edit Post' : 'Create New Post'}
		</h1>
		{#if onCancel}
			<button
				onclick={onCancel}
				class="rounded-lg border border-slate-600 px-4 py-2 text-slate-300 transition-colors hover:bg-slate-700"
			>
				Cancel
			</button>
		{/if}
	</div>

	{#if errors.length > 0}
		<div class="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
			<h3 class="font-semibold text-red-400 mb-2">Please fix the following errors:</h3>
			<ul class="list-disc list-inside text-red-300 space-y-1">
				{#each errors as error}
					<li>{error}</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="space-y-4">
		<!-- Title -->
		<div>
			<label for="title" class="mb-2 block text-sm font-medium text-slate-300">
				Title <span class="text-red-400">*</span>
			</label>
			<input
				id="title"
				type="text"
				bind:value={title}
				placeholder="Enter post title..."
				class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
			/>
		</div>

		<!-- Slug -->
		<div>
			<label for="slug" class="mb-2 block text-sm font-medium text-slate-300">
				Slug <span class="text-red-400">*</span>
				{#if autoGenerateSlug}
					<span class="text-xs text-slate-400">(auto-generated)</span>
				{/if}
			</label>
			<input
				id="slug"
				type="text"
				bind:value={slug}
				onblur={handleSlugEdit}
				onclick={handleSlugEdit}
				placeholder="post-url-slug"
				class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
			/>
		</div>

		<!-- Author -->
		<div>
			<label for="author" class="mb-2 block text-sm font-medium text-slate-300">Author</label>
			<input
				id="author"
				type="text"
				bind:value={author}
				placeholder="Author name (optional)"
				class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
			/>
		</div>

		<!-- Published toggle -->
		<div class="flex items-center space-x-3">
			<input
				id="published"
				type="checkbox"
				bind:checked={published}
				class="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
			/>
			<label for="published" class="text-sm font-medium text-slate-300">
				Publish immediately
			</label>
		</div>
	</div>

	<!-- Editor -->
	<div class="space-y-2">
		<label for="editor" class="block text-sm font-medium text-slate-300">
			Content <span class="text-red-400">*</span>
		</label>
		<div
			id="editor"
			bind:this={editorElement}
			class="min-h-[400px] rounded-lg border border-slate-600 bg-slate-800 p-4"
		></div>
	</div>

	<!-- Actions -->
	<div class="flex justify-end space-x-4">
		<button
			onclick={handleSave}
			disabled={isLoading}
			class="flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
		>
			{#if isLoading}
				<svg class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
					></path>
				</svg>
				Saving...
			{:else}
				{post ? 'Update Post' : 'Create Post'}
			{/if}
		</button>
	</div>
</div>