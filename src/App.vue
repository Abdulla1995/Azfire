<template>
  <div id="app"> 
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>

  </div>
</template>

<script>
import Navbar from '../src/views/Navbar.vue'
import Footer from '../src/views/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar, Footer
  }
}
</script>

<style>

</style>
