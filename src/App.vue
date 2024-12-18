<template>
  <Header />
  <main class="fondo">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<style>
.fondo {
  background-image: url('/fondo.jpg');
  background-size: cover; 
  background-position: center; 
  background-attachment: fixed;
  height: 100%;
  min-height: 80vh;
  padding-bottom: 5vh;
}
</style>
