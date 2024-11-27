<template>
  <Header />
  <main class="fondo">
    <RouterView />
  </main>
  <footer>
    <!-- Tu footer aquí -->
  </footer>
</template>

<script setup>
  import Header from './components/Header.vue';
</script>

<style>
.fondo {
  background-image: url('/fondo.jpg');
  background-size: cover; 
  background-position: center; 
  background-attachment: fixed;
  height: 100%;
  min-height: 90vh;
}
</style>
