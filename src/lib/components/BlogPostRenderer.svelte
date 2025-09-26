<script lang="ts">
	interface EditorBlock {
		id: string;
		type: string;
		data: any;
	}

	interface EditorContent {
		time: number;
		blocks: EditorBlock[];
		version: string;
	}

	interface Props {
		content: EditorContent;
	}

	let { content }: Props = $props();

	function renderBlock(block: EditorBlock) {
		switch (block.type) {
			case 'paragraph':
				return `<p class="mb-4 text-slate-300 leading-relaxed">${block.data.text}</p>`;
			case 'header':
				const level = block.data.level || 2;
				const headerClasses = {
					1: 'text-4xl font-bold text-white mb-6',
					2: 'text-3xl font-bold text-white mb-4',
					3: 'text-2xl font-semibold text-white mb-3',
					4: 'text-xl font-semibold text-white mb-2',
					5: 'text-lg font-semibold text-white mb-2',
					6: 'text-base font-semibold text-white mb-2'
				};
				return `<h${level} class="${headerClasses[level as keyof typeof headerClasses]}">${block.data.text}</h${level}>`;
			case 'list':
				const listType = block.data.style === 'ordered' ? 'ol' : 'ul';
				const listClass = block.data.style === 'ordered' 
					? 'list-decimal list-inside mb-4 text-slate-300 space-y-1' 
					: 'list-disc list-inside mb-4 text-slate-300 space-y-1';
				const items = block.data.items.map((item: string) => `<li>${item}</li>`).join('');
				return `<${listType} class="${listClass}">${items}</${listType}>`;
			case 'quote':
				return `<blockquote class="border-l-4 border-blue-500 pl-6 mb-4 italic text-slate-300">
					<p class="mb-2">${block.data.text}</p>
					${block.data.caption ? `<cite class="text-sm text-slate-400">— ${block.data.caption}</cite>` : ''}
				</blockquote>`;
			default:
				return `<div class="mb-4 p-4 bg-slate-800 rounded border text-slate-300">
					<p class="text-sm text-slate-400">Unsupported block type: ${block.type}</p>
					<pre class="text-xs mt-2 overflow-auto">${JSON.stringify(block.data, null, 2)}</pre>
				</div>`;
		}
	}
</script>

<div class="prose prose-slate max-w-none">
	{#each content.blocks as block}
		{@html renderBlock(block)}
	{/each}
</div>