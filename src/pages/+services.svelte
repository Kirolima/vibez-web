<script lang="ts">
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature } from '$lib/utils/types';

	export let features: Feature[] = [];
</script>

<div class="container">
	<Features {features} />
</div>