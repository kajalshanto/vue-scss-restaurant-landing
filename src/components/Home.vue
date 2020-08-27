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

	import GoTop from '@inotom/vue-go-top';
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
			GoTop
		},
	};
</script>
