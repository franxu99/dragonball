<template>
    <div class="p-4 h-[10vh] w-[100%] flex justify-center items-center gap-3 container-filter">
        <Select
            v-model="selectedState" 
            :options="statePlanet" 
            placeholder="Estado"
            optionLabel="label" 
            class="custom-select w-1/6 md:w-30rem"
        />
        
        <Button 
            severity="info" 
            label="Aplicar" 
            icon="pi pi-check" 
            iconPos="left" 
            class="custom-apply-button" 
            v-on:click="applyFilters" 
        />

        <Button 
            severity="secondary" 
            label="Limpiar Filtros" 
            icon="pi pi-times" 
            iconPos="left" 
            class="custom-reset-button" 
            v-on:click="resetFilters" 
        />
    </div>
    <div class="container-home p-4">
        <CardPlanet 
            v-for="planet in filteredPlanets" 
            :key="planet.id"
            :planet="planet" 
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Importación de las funciones necesarias
import { Select } from 'primevue';
import { Button } from 'primevue';
import CardPlanet from '@/components/cards/CardPlanet.vue'; // Componente de tarjeta
import { getPlanets } from '@/store/data'; // Función que obtiene los planetas desde la API
import { fetchPlanets } from '@/store/data';

// Declarar la variable planets como ref vacía
const filteredPlanets = ref([]);

const selectedState = ref('');

const statePlanet = ref([
    { label: 'Activos', value: 'false' },
    { label: 'Destruidos', value: 'true' }
]);

// Aplicar filtros según el estado seleccionado
async function applyFilters() {
    const filters = {
        state: selectedState.value,
    };

    filteredPlanets.value = await fetchPlanets(filters);
    console.log(filteredPlanets.value);
}

// Restablecer filtros y cargar planetas iniciales
async function resetFilters() {
    selectedState.value = ''; // Restablece el valor del filtro
    await loadInitialPlanets(); // Carga los planetas iniciales
}

// Cargar planetas iniciales
async function loadInitialPlanets() {
    const res = await getPlanets();
    filteredPlanets.value = res;
    console.log(filteredPlanets.value);
}

// Cargar datos iniciales cuando el componente se monte
onMounted(loadInitialPlanets);
</script>

<style scoped>
.container-home {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;   
}

.custom-select {
    border: 1px solid #d1d5db;
    border-radius: 8px;
    padding: 5px;
    background-color: #f9fafb;
    transition: all 0.3s;
}

.custom-select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
}

.custom-apply-button {
    background-color: #3b82f6 !important;
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: bold;
    color: white;
    transition: all 0.3s;
}

.custom-reset-button {
    background-color: #ef4444 !important;
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: bold;
    color: white;
    transition: all 0.3s;
}

@media (max-width: 1024px) {
  .container-home{
    display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr); 
  gap: 20px;
  }

  .container-filter{
    display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr); 
  gap: 20px;
  height: 100%;
  }

  .custom-select{
    width: 80%;
  }
  .custom-apply-button{
    width: 80%;
  }
  .custom-reset-button{
    width: 80%;
  }
}
</style>
