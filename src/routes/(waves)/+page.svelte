<script lang="ts">
	import IndexPage from '../../pages/+index.svelte';
	import type { Feature } from '$lib/utils/types';

	export let data: { features: Feature[] };
</script>

<IndexPage features={data.features} />
