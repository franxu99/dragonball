<template>
  <div class="p-4 w-[100%] flex justify-center items-center">
    <SelectButton 
      v-model="selectedPersonaje" 
      :options="personajesItems" 
      optionLabel="label" 
      class="w-full md:w-30rem"
      @change="onPersonajeSelect"
    />
  </div>

  <div class="container-home">
    <CardCharacter 
      v-for="character in characters" 
      :key="character.id"
      :character="character" 
      :sagaCharacters="sagaCharacters"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SelectButton from 'primevue/selectbutton';
import { getCharactersSaga, getHomeCharacters } from '@/store/data';
import CardCharacter from '@/components/cards/CardCharacter.vue';
import { useRouter } from 'vue-router';

const characters = ref([])

const sagaCharacters = ref(0)

const router = useRouter()

onMounted( async () => {
  await handleMenuClick(selectedPersonaje.value.saga);
})

    const personajesItems = ref([
      { label: 'Dragon Ball', value: 'dragon-ball', saga: 0},
      { label: 'Dragon Ball Z', value: 'dragon-ball-z', saga: 1 },
      { label: 'Dragon Ball GT', value: 'dragon-ball-gt', saga: 2 },
      { label: 'Dragon Ball Super', value: 'dragon-ball-super', saga: 3 },
      { label: 'Dragones', value: 'dragones', saga: 4 },
    ]);

    const selectedPersonaje = ref(personajesItems.value[0]);


    function onPersonajeSelect(event) {
      sagaCharacters.value = event.value.saga;
      handleMenuClick(event.value.saga); 
    }

    async function handleMenuClick(saga) {
      characters.value = await getCharactersSaga(saga);
    }
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
