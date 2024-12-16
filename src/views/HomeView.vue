<template>
  <div class="h-[15vh] w-full flex flex-col items-center justify-center space-y-4">
    <div class="w-full flex justify-center">
      <div class="relative w-full flex justify-center">
        <InputText 
          class="h-[5vh] w-[30%] input-text" 
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
  <div class="p-10 flex justify-center space-x-2">
      <button 
        v-for="pageNumber in 6" 
        :key="pageNumber" 
        @click="loadPage(pageNumber)" 
        :class="['pagination-button', { 'active': pageNumber === page }]"
      >
        {{ pageNumber }}
      </button>
    </div>
</template>

<script setup>
import 'primeicons/primeicons.css';
import { onMounted, ref, computed } from 'vue';
import InputText from 'primevue/inputtext';
import CardCharacter from '@/components/cards/CardCharacter.vue';
import { getHomeCharacters } from '@/store/data';

const res = ref({});
const characters = ref([]);
const search = ref('');
const page = ref(1);

const loadCharacters = async (pageNumber) => {
  res.value = await getHomeCharacters(pageNumber);
  characters.value = res.value.json.items;
};

const loadPage = async (pageNumber) => {
  page.value = pageNumber;
  await loadCharacters(pageNumber);
};

onMounted(() => {
  loadCharacters(page.value);
});

const filteredCharacters = computed(() => {
  if (!characters.value.length) return [];
  if (!search.value) return characters.value;
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

.pagination-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.pagination-button:hover {
  background-color: #ddd;
}

.pagination-button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

@media (max-width: 1084px) {
  .container-home{
    display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr); 
  gap: 20px;
  }
  .input-text{
    width: 80vw;
  }
}
</style>
