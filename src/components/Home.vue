<template>
    <div id="home">
        <Header/>
        <Hero/>
    </div>
</template>

<script>
import Header from './Header'
import Hero from './Hero'


    export default {
        name: 'Home',

        components: {
            Header, 
            Hero,
        }
    }
</script>

<style scoped>

</style>