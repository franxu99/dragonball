<template>
  <div class="h-[15vh] w-full flex items-center justify-center">
    <div class="w-full flex justify-center">
      <div class="relative w-1/4">
        <!-- Input con ícono -->
        <InputText 
          class="pl-8 w-full" 
          v-model="search" 
          placeholder="Busca un personaje o planeta" 
        >
          <i class="pi pi-search"></i>
        </InputText>
      </div>
    </div>
  </div>
  <div class="container-home">
    <CardCharacter 
      v-for="character in filteredCharacters" 
      :key="character.id"
      :character="character" 
    />
  </div>
</template>

<script setup>
import 'primeicons/primeicons.css';
import { onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import CardCharacter from '@/components/cards/CardCharacter.vue';
import {getHomeCharacters} from '@/store/data';
import { computed } from 'vue';

const characters = ref([]); 
const search = ref(''); 

onMounted (async () =>  {
  characters.value = await getHomeCharacters()
  console.log(characters.value)
});

const filteredCharacters = computed(() => {
  if (!characters.value.length) return [];  // Si no hay personajes aún, no mostramos nada
  if (!search.value) return characters.value; // Si no hay búsqueda, mostramos todos los personajes
  return characters.value.filter(character => 
    character.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style>
.container-home {
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;   
}
</style>
