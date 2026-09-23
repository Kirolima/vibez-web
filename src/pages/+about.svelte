<script>
	import About from '$lib/components/organisms/About.svelte';
</script>

<div class="container">
	<About />

	<section class="details">
		<p class="eyebrow">Yaklaşımımız</p>
		<h1>Fikri stratejiye, stratejiyi etkiye dönüştürüyoruz.</h1>
		<p>
			Her markanın kendine özgü bir hikayesi olduğuna inanıyoruz. İhtiyaçları dinliyor,
			veriyi ve yaratıcılığı bir araya getirerek sürdürülebilir dijital deneyimler
			tasarlıyoruz.
		</p>
	</section>
</div>

<style lang="scss">
	.details {
		max-width: 720px;
		margin: 0 auto;
		padding: 40px 0 80px;
		text-align: center;
	}

	.eyebrow {
		color: var(--color--primary);
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
</style>