<template>
    <div id="home">
        <Header/>
        <Hero/>
        <About/>
        <Dishes/>

    </div>
</template>

<script>
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Dishes from './Dishes'




    export default {
        name: 'Home',

        components: {
            Header, 
            Hero,
            About,
            Dishes
        }
    }
</script>

 