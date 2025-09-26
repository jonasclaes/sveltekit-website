<script lang="ts">
	import type EditorJS from '@editorjs/editorjs';
	import { onMount } from 'svelte';

	let editor = $state<EditorJS | null>(null);
	let editorElement: HTMLElement;
	let editorData = $state<unknown>(null);

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
				onChange: async () => {
					editorData = await editor!.save();
				}
			});

			editor.isReady.then(async () => {
				editorData = await editor!.save();
			});
		} catch (error) {
			console.error('Failed to load EditorJS:', error);
		}
	});
</script>

<div class="flex flex-col gap-2">
	<div bind:this={editorElement}></div>
	<hr />
	<pre>{JSON.stringify(editorData, null, 2)}</pre>
</div>
