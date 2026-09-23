<div class="container">
	<section class="references">
		<p class="eyebrow">İş Ortaklarımız</p>
		<h1>Birlikte büyüttüğümüz markalar.</h1>
		<p>
			Stratejiden uygulamaya, her projede ölçülebilir sonuçlar ve uzun soluklu iş
			ortaklıkları hedefliyoruz.
		</p>

		<div class="reference-list">
			<div>Marka Stratejisi</div>
			<div>Dijital Deneyim</div>
			<div>İçerik ve İletişim</div>
		</div>
	</section>
</div>

<style lang="scss">
	.references {
		max-width: 760px;
		margin: 0 auto;
		padding: 100px 0 140px;
		text-align: center;
	}

	.eyebrow {
		color: var(--color--primary);
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.reference-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15px;
		margin-top: 50px;

		div {
			padding: 30px 15px;
			background: var(--color--card-background);
			border-radius: 10px;
			box-shadow: var(--card-shadow);
			font-weight: 700;
		}
	}

	@media (max-width: 600px) {
		.reference-list {
			grid-template-columns: 1fr;
		}
	}
</style>