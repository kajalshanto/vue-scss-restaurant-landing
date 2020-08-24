<template>
    <div id="home">
        <Header/>
        <Hero/>
        <About/>
        <Dishes/> 
        <Menu/>
        <Gmap/>
    </div>
</template>

<script>
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Dishes from './Dishes'
import Menu from './FoodMenu'
import Gmap from './GoogleMap'






    export default {
        name: 'Home',

        components: {
            Header, 
            Hero,
            About,
            Dishes,
            Menu,
            Gmap
        }
    }
</script>

 