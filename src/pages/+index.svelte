<script lang="ts">
	import About from '$lib/components/organisms/About.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import Hero from '$lib/components/organisms/Hero.svelte';
	import type { Feature } from '$lib/utils/types';

	export let features: Feature[] = [];
</script>

<div class="container">
	<Hero />
	<About />
	<Features {features} />
</div>