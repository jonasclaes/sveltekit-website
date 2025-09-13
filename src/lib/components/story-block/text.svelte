<script lang="ts">
	import type { ContentNode } from '../content';
	import RichText from '../rich-text.svelte';

	type Props = { __typename: 'ComponentStoryBlockText'; content: ContentNode[] };
	let { __typename, content }: Props = $props();
	if (__typename !== 'ComponentStoryBlockText') throw new Error('invalid typename for text block');
</script>

<div class="mb-16">
	<RichText nodes={content} />
</div>
