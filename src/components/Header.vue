<template>
  <div class="h-[10]">
    <header class="h-[10vh] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 flex justify-between items-center px-8 shadow-lg">
    <!-- Logo en la izquierda -->
    <img src="/logo.png" alt="Logo" class="logo h-32 max-w-[150%] transition-transform duration-300 hover:scale-110" />

    <!-- Botones en el centro -->
    <div class="nav-buttons flex gap-12">
      <button
        class="h-14 px-6 text-xl btn text-gray-800 font-semibold"
        @click="toPage('personajes')"
      >Personajes</button>

      <button
        class="h-14 px-6 text-xl btn text-gray-800 font-semibold"
        @click="toPage('')"
      >Home</button>

      <button
        class="h-14 px-6 text-xl btn text-gray-800 font-semibold"
        @click="toPage('planets')"
      >Planetas</button>
    </div>
  </header>
  </div>
  
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function toPage(page) {
  router.push(`/${page}`);
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 10vh;
  background: linear-gradient(45deg, #ffb800, #ff6e00, #ff4000); /* Degradado de tonos naranja y rojo */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra en el header */
  border-bottom: solid 2px;
}

.nav-buttons {
  display: flex;
  gap: 3rem;
}

/* Estilo de los botones */
.btn {
  height: 3.5rem;
  padding: 0 1.5rem;
  font-size: 1.125rem;
  background-color: rgb(255, 244, 124);
  color: rgb(33, 33, 33);
  font-weight: 600;
  border-radius: 9999px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgb(255, 174, 0); /* Color de hover con un toque más "ki" */
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Sombra suave */
  }
}

/* Estilo del logo */
.logo {
  height: 100%; /* Ajusta el alto */
  width: 60%;
  width: auto; /* Mantiene la proporción original del logo */
  max-width: 120%; /* Permite que se expanda de manera controlada */
  object-fit: contain; /* Mantiene la proporción */
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(5deg); /* Ligero giro para hacerlo más dinámico */
  }
}

/* Estilos responsive */
@media (max-width: 1024px) {
  .navbar {
    padding: 0 1rem; /* Menos padding en pantallas más pequeñas */
  }

  .nav-buttons {
    gap: 1rem;
  }

  .logo {
    height: 100%;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  header{
    height: 30vh;
  }
  .navbar {
    flex-direction: column; /* Los elementos se apilan verticalmente */
    align-items: center;
    height: auto;
    padding: 1rem; /* Ajuste de padding */
  }
  .logo{
    width: 60%;
  }

  .nav-buttons {
    flex-direction: column;
    gap: 1.5rem; /* Los botones se apilan verticalmente */
    align-items: center;
    margin-top: 1rem;
  }

  .btn {
    width: 100%; /* Los botones ocupan todo el ancho */
    text-align: center; /* Alinear texto al centro */
  }
}

@media (max-width: 480px) {
  .btn {
    font-size: 1rem; /* Reducir el tamaño de fuente en pantallas pequeñas */
  }

  .logo {
    height: 70%;
    max-width: 100%;
  }
}
</style>
