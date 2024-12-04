<template>
  <div class="p-4 h-[10vh] w-[100%] flex justify-center items-center gap-3">
    <Select
      v-model="selectedAffiliation" 
      :options="affiliationItems" 
      placeholder="Afiliación"
      optionLabel="label" 
      class="custom-select w-1/6 md:w-30rem"
    />

    <Select
      v-model="selectedGender" 
      :options="genderItems" 
      placeholder="Género"
      optionLabel="label" 
      class="custom-select w-1/6 md:w-30rem"
    />

    <Select 
      v-model="selectedRace" 
      :options="raceItems" 
      placeholder="Raza"
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

  <div class="container-home">
    <CardCharacter 
      v-for="character in filteredCharacters" 
      :key="character.id"
      :character="character" 
      :sagaCharacters="sagaCharacters"
    />
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import Select from 'primevue/select';
import { Button } from 'primevue';
import { getHomeCharacters } from '@/store/data';
import CardCharacter from '@/components/cards/CardCharacter.vue';
import { fetchCharacters } from '@/store/data';

const filteredCharacters = ref([]);
const sagaCharacters = ref(0);


const affiliationItems = ref([
  { label: 'Z Fighter', value: 'z-fighter' },
  { label: 'Freelancer', value: 'freelancer' },
  { label: 'Army of Frieza', value: 'army-of-frieza' },
  { label: 'Pride Troopers', value: 'pride-troopers' },
  { label: 'Assistant of Vermoud', value: 'assistant-of-vermoud' },
  { label: 'God Assistant of Beerus', value: 'god-assistant-of-beerus' },
  { label: 'Villain', value: 'villain' },
  { label: 'Other', value: 'other' }
]);

const genderItems = ref([
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Unknown', value: 'Unknown' }
]);

const raceItems = ref([
  { label: 'Human', value: 'Human' },
  { label: 'Saiyan', value: 'Saiyan' },
  { label: 'Namekian', value: 'Namekian' },
  { label: 'Majin', value: 'Majin' },
  { label: 'Frieza Race', value: 'Frieza Race' },
  { label: 'Android', value: 'Android' },
  { label: 'Jiren Race', value: 'Jiren Race' },
  { label: 'God Angel', value: 'God Angel' },
  { label: 'Evil', value: 'Evil' },
  { label: 'Nucleico', value: 'Nucleico' },
  { label: 'Nucleico benigno', value: 'Nucleico benigno' },
  { label: 'Unknown', value: 'Unknown' }
]);


const selectedAffiliation = ref('');
const selectedGender = ref('');
const selectedRace = ref('');


async function applyFilters() {
  const filters = {
    affiliation: selectedAffiliation.value,
    gender: selectedGender.value,
    race: selectedRace.value,
  };

  filteredCharacters.value = await fetchCharacters(filters);
  console.log(filteredCharacters.value)
}

async function resetFilters() {
  selectedAffiliation.value = '';
  selectedGender.value = '';
  selectedRace.value = '';
  nameFilter.value = '';
  await loadInitialCharacters();
}

async function loadInitialCharacters() {
  const res = await getHomeCharacters();
  filteredCharacters.value = res.json.items;
  console.log(filteredCharacters.value);
}

onMounted(loadInitialCharacters);
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

.custom-apply-button:hover {
  background-color: #2563eb !important;
  transform: scale(1.05);
}

.custom-reset-button {
  background-color: #ef4444 !important;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
}

.custom-reset-button:hover {
  background-color: #dc2626 !important;
  transform: scale(1.05);
}
</style>
