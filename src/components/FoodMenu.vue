<template>
	<div id="menu" class="pb-100">
		<div class="container">
			<div class="row">
				<div class="section-title-content col-sm-12 text-center pt-100">
					<h1 class="section-title white">
						Our <span class="title-span">Food</span> Menu
					</h1>

					<p class="section-p white">
						Our Moto is Make People Happy, Have Some Fun and Be
						Number 1! The best flavor is in the town. We keep all
						kind of food menus for Foddies. You will discover a
						thounsand of items in one place. We love to share our
						taste. Come and Enjoy.
					</p>
					<img
						class="img-fluid mt-5"
						:src="
							require('../assets/images/sec-icon/section-title-icon.png')
						"
						alt="coffee cup"
					/>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 isotop text-center pt-5 mb-5">
					<div class="button-group mb-4">
						<button
							v-for="(val, key) in option.getFilterData"
							:key="key"
							class="button"
							:class="[key === filterOption ? 'is-checked' : '']"
							@click="filter(key)"
						>
							{{ key }}
						</button>
					</div>
					<div class="isotop-menus">
						<isotope
							ref="cpt"
							id="root_isotope1"
							:item-selector="'element-item'"
							:list="list"
							:options="option"
							@filter="filterOption = arguments[0]"
						>
							<div
								v-for="(element, index) in list"
								:class="[element.category]"
								:key="index"
							>
								<div class="image float-left">
									<img
										class="img-fluid"
										:src="
											require(`@/assets/images/menus/${element.image}`)
										"
										alt="stack menu image"
									/>
								</div>
								<div class="menu-content fixed">
									<h5 class="name">{{ element.title }}</h5>
									<p class="symbol">{{ element.details }}</p>
									<h4 class="number">
										$ {{ element.price }}
									</h4>
								</div>
							</div>
						</isotope>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import isotope from "vueisotope";

	//var count = 0;
	export default {
		name: "Menu",
		components: {
			isotope,
		},

		data() {
			return {
				list: [
					{
						title: "BLOOMIN' ONION",
						details:
							"Cooked until golden and ready to dip into our spicy signature bloom sauce.",
						price: 9.49,
						category: "starter",
						image: "onion.png",
					},
					{
						title: "GRILLED SHRIMP ON THE BARBIE",
						details:
							"Sprinkled with a special blend of seasonings and grilled. Served with grilled artisan bread.",
						price: 10.99,
						category: "starter",
						image: "grilled-shrirmp.png",
					},
					{
						title: "GOLD COAST COCONUT SHRIMP",
						details:
							"Hand-dipped in batter, rolled in coconut and fried golden. Paired with Creole marmalade.",
						price: 6.29,
						category: "starter",
						image: "gold-coast.png",
					},
					{
						title: "AUSSIE COBB SALAD",
						details:
							"Fresh mixed greens, chopped hard-boiled eggs, Monterey Jack and Cheddar cheese.",
						price: 11.99,
						category: "starter",
						image: "aussie.png",
					},
					{
						title: "CHICKEN TORTILLA SOUP",
						details:
							"Chicken breast in a seasoned broth, topped with Monterey Jack and Cheddar cheese, cilantro.",
						price: 6.99,
						category: "starter",
						image: "chicken-tortilla.png",
					},

					{
						title: "VICTORIA'S FILET® MIGNON*",
						details:
							"The most tender and juicy thick cut seasoned and seared.",
						price: 28.99,
						category: "steaks",
						image: "victoria-filet.png",
					},
					{
						title: "OUTBACK CENTER-CUT SIRLOIN*",
						details:
							"Center-cut for tenderness. Lean, hearty and full of flavor. Seasoned and seared.",
						price: 20.49,
						category: "steaks",
						image: "outbreak-center.png",
					},
					{
						title: "RIBEYE*",
						details:
							"Well-marbled, juicy and savory. Seasoned grilled for a delicious natural flavor.",
						price: 26.29,
						category: "steaks",
						image: "ribeye.png",
					},
					{
						title: "BONE-IN NATURAL CUT RIBEYE*",
						details:
							"Bone-in and extra marbled for maximum tenderness.",
						price: 29.99,
						category: "steaks",
						image: "bone-in.png",
					},
					{
						title: "DROVER'S RIBS & CHICKEN PLATTER",
						details:
							"1/2 order of Baby Back Ribs and grilled chicken breast. Aussie Fries.",
						price: 14.49,
						category: "entrees",
						image: "droven-ribs.png",
					},
					{
						title: "GRILLED CHICKEN ON THE BARBIE",
						details:
							"Seasoned and grilled chicken breast with our signature BBQ sauce.",
						price: 19.49,
						category: "entrees",
						image: "grillef-chicken.png",
					},
					{
						title: "BABY BACK RIBS",
						details:
							"Smoked, grilled and brushed with a tangy BBQ sauce. Aussie Fries.",
						price: 17.49,
						category: "entrees",
						image: "baby-ricks.png",
					},
					{
						title: "THE STACK BURGER*",
						details:
							"Topped with lettuce, tomato, onion, pickle and mustard.",
						price: 10.99,
						category: "entrees",
						image: "the-stack.png",
					},
					{
						title: "PERFECTLY GRILLED SALMON*",
						details: "Seasoned and grilled. Fresh seasonal veggie.",
						price: 20.49,
						category: "entrees",
						image: "perfectly-grilled-salmon.png",
					},
					{
						title: "CHICKEN TORTILLA SOUP",
						details:
							"Chicken breast in a seasoned broth, topped with Monterey Jack and Cheddar cheese, cilantro.",
						price: 6.99,
						category: "sides",
						image: "chicken-tortilla.png",
					},
					{
						title: "BAKED POTATO",
						details:
							"Baked potato rolled in kosher salt available with butter, mixed cheese.",
						price: 3.29,
						category: "sides",
						image: "baked-potato.png",
					},
					{
						title: "SALTED CARAMEL TOPPED CHEESECAKE",
						details:
							"Aussie-sized slice of premium New York-style cheesecake drizzled with our rich salted caramel sauce.",
						price: 5.4,
						category: "deserts",
						image: "salted-creame.png",
					},
					{
						title: "CHOCOLATE THUNDER FROM DOWN UNDER®",
						details:
							"An extra generous pecan brownie topped with rich vanilla ice cream.",
						price: 8.99,
						category: "deserts",
						image: "chocolate-thunder.png",
					},
					{
						title: "Americano",
						details:
							"A shot of our Arabica specialty espresso topped with piping hot water. Pure enjoyment.",
						price: 6.4,
						category: "coffee",
						image: "americano.png",
					},
					{
						title: "Cappuchino",
						details:
							"Made with 100% sustainable Arabica coffee beans, blended with steamed milk.",
						price: 7.5,
						category: "coffee",
						image: "cappuchino.png",
					},
					{
						title: "Latte",
						details:
							"Warm up with a rich Latte, made from Rainforest Alliance Certified espresso.",
						price: 5.5,
						category: "coffee",
						image: "latte.png",
					},
					{
						title: "Mocha",
						details:
							"The Mocha is made with espresso beans that are sustainably sourced from Rainforest Alliance Certified",
						price: 10.5,
						category: "coffee",
						image: "mocha.png",
					},
				],
				selected: null,
				filterOption: "all",
				option: {
					itemSelector: ".element-item",
					getFilterData: {
						all: function() {
							return true;
						},
						starter: function(el) {
							return el.category === "starter";
						},
						steaks: function(el) {
							return el.category === "steaks";
						},
						entrees: function(el) {
							return el.category === "entrees";
						},
						sides: function(el) {
							return el.category === "sides";
						},

						deserts: function(el) {
							return el.category === "deserts";
						},
						coffee: function(el) {
							return el.category === "coffee";
						},
					},
				},
			};
		},
		methods: {
			filter: function(key) {
				this.$refs.cpt.filter(key);
			},
		},
	};
</script>

<style>
	.isotop {
		background-color: #fff;
		background-image: url("../assets/images/cover/menu-btm.png");
		background-position: center bottom;
		background-repeat: no-repeat;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
		display: block;
		float: left;
		padding: 90px 90px 240px;
		width: 100%;
		margin-top: 7%;
	}
	/* Isotop */

	* {
		box-sizing: border-box;
	}

	/* ---- button ---- */

	.button {
		display: inline-block;
		background-color: transparent;
		border: medium none;
		color: #535353;
		font-size: 15px;
		font-weight: 700;
		letter-spacing: 0.4px;
		line-height: 20px;
		margin: 0 22px 5px;
		padding: 0;
		text-transform: uppercase;
		cursor: pointer;
		border: none;
	}

	.button:hover {
		color: #e54c2a;
	}

	.button:active,
	.button.is-checked {
		color: #e54c2a;
		outline: none;
	}

	.is-checked {
		color: #e54c2a;
		outline: none;
	}

	.button.is-checked {
		color: #e54c2a;
		outline: none;
	}

	.button:active {
		box-shadow: none;
	}

	.isotop-menus {
		padding: 50px 70px;
	}
	/* ---- .element-item ---- */

	.element-item {
		position: relative;
		float: left;
		/* width: 100px;
		height: 100px; */
		width: 48%;
		margin: 1%;
		padding: 10px;
		color: #262524;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 35px;
	}

	.element-item img {
		padding-top: 6px;
	}

	.element-item .name {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 4px;
		text-transform: capitalize;
	}

	.element-item .symbol {
		font-size: 14px;
		font-style: italic;
		margin-bottom: 2px;
	}

	.element-item .number {
		color: #e54c2a;
		font-size: 20px;
		font-weight: 600;
		margin: 0;
	}
	.menu-content {
		padding-left: 20px;
		text-align: left !important;
	}
	.fixed {
		overflow: hidden;
	}
</style>
