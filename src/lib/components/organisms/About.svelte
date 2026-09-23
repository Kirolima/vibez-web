<section id="about">
	<div class="info">
		<p class="eyebrow">Biz Kimiz</p>
		<h2>Markaların dijital dünyadaki yol arkadaşıyız.</h2>
		<p>
			Uşak'ta faaliyet gösteren bir dijital medya ve reklam ajansıyız. Strateji,
			tasarım ve teknolojiyi bir araya getirerek markaların daha görünür, daha
			anlaşılır ve daha etkili olmasını sağlıyoruz.
		</p>
	</div>
	<div class="image">
		<strong>VİBEZ</strong>
		<span>fikirden etkiye</span>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			.eyebrow {
				color: var(--color--primary);
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: 0.12em;
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.image {
			width: 220px;
			height: 220px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: var(--color--primary);
			color: var(--color--text-inverse);
			transform: rotate(3deg);

			strong {
				font-size: 2rem;
			}
		}
	}
</style>
