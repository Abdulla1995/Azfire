<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <Brand />
    <Footer></Footer>

  </div>
</template>

<script>
import Brand from '../src/components/Brand.vue'
import Navbar from '../src/views/Navbar.vue'
import Footer from '../src/views/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar, Footer, Brand
  }
}
</script>

<style>

</style>
