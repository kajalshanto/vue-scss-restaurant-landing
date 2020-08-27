<template>
	<div id="home">
		<Header />
		<Hero />
		<About />
		<Dishes />
		<Menu />
		<Gallery />
		<Reservation />
		<Gmap />
		<Testimonials />
		<Footer />
		<go-top></go-top>
	</div>
</template>

<script>
	import Header from "./Header";
	import Hero from "./Hero";
	import About from "./About";
	import Dishes from "./Dishes";
	import Menu from "./FoodMenu";
	import Gallery from "./Gallery";
	import Reservation from "./Reservation";
	import Gmap from "./GoogleMap";
	import Testimonials from "./Testimonials";
	import Footer from "./Footer";

	import GoTop from "@inotom/vue-go-top";
	export default {
		name: "Home",

		components: {
			Header,
			Hero,
			About,
			Dishes,
			Menu,
			Gallery,
			Reservation,
			Gmap,
			Testimonials,
			Footer,
			GoTop,
		},
	};
</script>

<style scoped>
	.vue-go-top {
		width: 70px;
		height: 70px; 
		right: 35px !important; /* deafult 50px */
		bottom: calc(100px);
		z-index: 1000;
		color: rgb(255, 255, 255);
		background-color: rgb(255 0 0 / 1) !important;
		/* box-shadow: #343a40 1px 1px 2px !important; */
		box-shadow: #000 1px 1px 2px !important;
		border-radius: 50%;
	}
	.vue-go-top:focus,
	.vue-go-top:active {
		outline: none !important; 
		box-shadow: none !important;
	}
</style>
