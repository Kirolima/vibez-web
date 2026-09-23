<script>
	export let animated = true;
</script>

<div class="logo" class:animated>
	<img src="/favicons/vibez.svg" alt="Vibez" />
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		width: auto;
		height: 100%;
		display: flex;
		gap: 16px;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}

		img {
			width: auto;
			height: 100%;
			max-height: 28px;
		}

		&:hover img {
			filter: drop-shadow(0px 0px 3px var(--color--primary));
		}
	}
</style>
