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
		
		<!--  -->
		<back-to-top text="Back to top" visibleoffset="500">
			<MdArrowUpIcon w="40px" h="40px" />
		</back-to-top>
		<!--  --> 
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

	import MdArrowUpIcon from "vue-ionicons/dist/md-arrow-up.vue";
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
			MdArrowUpIcon,
		},
	};
</script>

<style>
	.vue-back-to-top {
		right: 25px;
		bottom: 60px;
		color: #fff;
		background-color: red;
		box-shadow: #000 2px 2px 2px;
		transition: all 300ms ease-in-out ;
	} 
	.vue-back-to-top:hover {
		color: #000;
		transform: scale(1.1); 
	} 
</style>
