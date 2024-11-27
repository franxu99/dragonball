<template>
    <header class="h-[10vh] bg-orange-400 flex justify-between items-center px-6">
      <!-- Logo en la izquierda -->
      <img src="/logo.png" alt="Logo" class="h-40 w-20" /> <!-- Ajusta la extensión si es necesario -->
  
      <!-- Botones en el centro -->
      <div class="flex gap-10">
        <button
          class="h-14 px-6 text-lg btn" 
          @click="toPage('personajes')" 
        >Personajes</button>
  
        <button
          class="h-14 px-6 text-lg btn" 
          @click="toPage('')" 
        >Home</button>
    
        <button 
          class="h-14 px-6 text-lg btn" 
          @click="toPage('planetas')" 
        >Planetas</button>
      </div>
    </header>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'; 
  
  const router = useRouter();
  
  function toPage(page) {
    router.push(`/${page}`);
  }
  </script>
  
  <style>
  .btn {
    background-color: rgb(255, 244, 124);
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: 600;
  }
  
  .btn:hover {
    background-color: rgb(173, 216, 230); 
    transform: scale(1.05); 
  }
  
  header img {
    height: 60px; /* Ajusta el tamaño del logo */
    object-fit: contain; /* Mantiene la proporción del logo */
  }
  </style>
  