<template>
    <div class="h-[90vh] w-[100vw] flex justify-center items-center">
    <div v-if="planetData" class="card-planet bg-white shadow-lg rounded-2xl flex overflow-hidden">
        <div class="w-1/3 bg-gradient-to-t from-gray-200 to-gray-100 p-6 flex flex-col items-center">
        <img 
            :src="planetData.image" 
            alt="Imagen de {{ planetData.name }}" 
            class="rounded-full border-4 border-white shadow-md w-[70%] h-[60%] object-cover mb-4"
        />
        <h3 class="text-3xl font-bold text-gray-800 mb-2">{{ planetData.name }}</h3>
        <span 
            class="text-xs px-4 py-1 rounded-full shadow-md"
            :class="planetData.isDestroyed ? 'bg-red-400 text-white' : 'bg-green-400 text-white'"
        >
            {{ planetData.isDestroyed ? 'Destruido' : 'Activo' }}
        </span>
        </div>

        <div class="w-2/3 p-6 flex flex-col">
        <div class="tabs flex space-x-4 border-b-2 border-gray-200 mb-4">
            <button 
            v-for="tab in tabs" 
            :key="tab" 
            @click="activeTab = tab" 
            :class="['tab-button', { 'active': activeTab === tab }]"
            >
            {{ tab }}
            </button>
        </div>

        <div class="tab-content flex-grow overflow-auto">
            <div v-if="activeTab === 'Descripción'">
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Descripción</h2>
            <p class="text-gray-600 text-base leading-relaxed">{{ planetData.description }}</p>
            </div>

            <div v-else-if="activeTab === 'Detalles'">
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Detalles</h2>
            <ul class="text-gray-600 text-base space-y-2">
                <li><strong>ID:</strong> {{ planetData.id }}</li>
                <li><strong>Estado:</strong> {{ planetData.isDestroyed ? 'Destruido' : 'Activo' }}</li>
            </ul>
            </div>
        </div>
        </div>
    </div>

    <div v-else class="text-gray-600 text-xl">Cargando datos del planeta...</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getPlanet } from '@/store/data';

const route = useRoute();
const planetData = ref(null);
const tabs = ["Descripción", "Detalles"];
const activeTab = ref(tabs[0]);

onMounted(async () => {
    const planetId = route.params.id;
    planetData.value = await getPlanet(planetId);
});
</script>

<style>
.card-planet {
    width: 80%;
    height: 70%;
    display: flex;
    background-color: #ffffff;
}

.tabs {
    display: flex;
    margin-bottom: 1rem;
}

.tab-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: #555;
    background: none;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color 0.3s, border-bottom 0.3s;
}

.tab-button:hover {
    color: #000;
}

.tab-button.active {
    color: #000;
    border-bottom: 2px solid #000;
}
</style>
