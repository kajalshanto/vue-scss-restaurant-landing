<template>
	<div id="dishes" class="section">
		<div class="container">
			<!-- row  -->
			<div class="row">
				<!-- Section title  -->
				<div class="section-title-content col-sm-12 text-center">
					<h1 class="section-title">
						Known <span class="title-span">Steaks</span> To The
						World
					</h1>

					<p class="section-p">
						We ensure you
						<strong>fresh halal & hygienic</strong> food. Australia
						inspires a fresh take on life. That seize-the-day
						mindset reflects in all we do - especially in our menu.
					</p>
					<img
						class="img-fluid mt-5"
						:src="
							require('../assets/images/sec-icon/section-title-icon.png')
						"
						alt="coffee cup"
					/>
				</div>
				<!--/. Section title  -->
			</div>
			<!--/. row  -->

			<!-- row  -->
			<div class="row pt-100">
				<!-- single featured items -->
				<div
					class="col-md-4 col-sm-6 col-12 text-center"
					v-for="item in featuredItems"
					:key="item.id"
				>
					<div class="featured-item">
						<img
							class="img-fluid mt-5"
							:src="require(`@/assets/images/dishes/${item.img}`)"
							alt="Stack House"
						/>
						<h5 class="title">{{ item.title }}</h5>
						<h3 class="price">$ {{ item.price }}</h3>
					</div>
				</div>
				<!--/. single featured items -->

				<!-- Button -->
				<div class="col-sm-12 col-12 text-center mt-50">
					<a
						href="#menu"
						data-scroll
						class="btn btn-custom btn-primary-border"
						>View all menu
						<span
							><MdArrowRoundForwardIcon w="20px" h="14px"
						/></span>
					</a>
				</div>
				<!--/. Button -->
			</div>
			<!--/. row  -->
		</div>
	</div>
</template>

<script>
	// import iconic icons
	import MdArrowRoundForwardIcon from "vue-ionicons/dist/md-arrow-round-forward.vue";

	export default {
		name: "Dishes",

		components: {
			MdArrowRoundForwardIcon,
		},
		data() {
			return {
				featuredItems: [
					{
						id: 1,
						img: "steak-1.png",
						title: "VICTORIA'S FILET® MIGNON*",
						price: "28.99",
					},
					{
						id: 2,
						img: "steak-2.png",
						title: "OUTBACK CENTER-CUT SIRLOIN*",
						price: "20.49",
					},
					{
						id: 3,
						img: "steak-3.png",
						title: "RIBEYE*",
						price: "26.29",
					},
				],
			};
		},
	};
</script>
