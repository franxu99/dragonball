<template>
    <div class="carrusel">
      <!-- Imagen actual -->
      <img :src="imagenes[indiceActual].image" :alt="'Imagen ' + (indiceActual + 1)" class="imagen-carrusel" />
  
      <!-- Controles de navegación -->
      <button @click="cambiarImagen(-1)" class="btn-nav">❮</button>
      
      <!-- Indicadores -->
      <div class="indicadores">
          <span
          v-for="(imagen, index) in imagenes"
          :key="index"
          :class="['indicador', { activo: index === indiceActual }]"
          @click="irAImagen(index)"
          ></span>
        </div>
        <button @click="cambiarImagen(1)" class="btn-nav">❯</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imagenes: {
        type: Array,
        required: true
      },
      intervalo: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        indiceActual: 0
      };
    },
    mounted() {
      this.iniciarCarrusel();
    },
    beforeDestroy() {
      if (this.intervaloID) {
        clearInterval(this.intervaloID);
      }
    },
    methods: {
      iniciarCarrusel() {
        this.intervaloID = setInterval(() => {
          this.cambiarImagen(1);
        }, this.intervalo);
      },
      cambiarImagen(direccion) {
        this.indiceActual = (this.indiceActual + direccion + this.imagenes.length) % this.imagenes.length;
      },
      irAImagen(indice) {
        this.indiceActual = indice;
      }
    }
  };
  </script>
  
  <style scoped>
  .carrusel {
    height: 100%;
    position: relative;
  }
  
  .imagen-carrusel {
    width: 100%;  /* La imagen ocupa todo el ancho del contenedor */
    height: 100%;  /* Mantenemos la proporción de la imagen */
    transition: opacity 0.5s ease-in-out;  /* Suavizamos la transición */
  }
  
  .btn-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    z-index: 10;
  }
  
  .btn-nav:first-child {
    left: 10px;
  }
  
  .btn-nav:last-child {
    right: 10px;
  }
  
  .indicadores {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  
  .indicador {
    width: 15px;  /* Aumentamos el tamaño del indicador */
    height: 15px;
    margin: 0 5px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .indicador.activo {
    background-color: white;  /* Indicador activo */
  }
  </style>
  