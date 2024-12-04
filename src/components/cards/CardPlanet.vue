<template>
    <div 
    class="container-card w-[60%] bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
    v-on:click="toPlanet(planet.id)"
    >
    <img 
        :src="planet.image" 
        :alt="planet.name" 
        class="w-full h-48 object-cover"
    />

    <div class="p-4">
        <h3 class="font-bold text-xl mb-2 text-gray-800">{{ planet.name }}</h3>
        <p class="text-sm text-gray-600 mb-4">
        </p>
        <p class="text-sm">
        <strong>Estado: </strong> 
        <span :class="planet.isDestroyed ? 'text-red-500' : 'text-green-500'">
            {{ planet.isDestroyed ? 'Destruido' : 'Activo' }}
        </span>
        </p>
    </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    planet: {
    type: Object,
    required: true,
    },
});

const toPlanet = (id) => {
    router.push({
    path: `/planet/${id}`
    });
};
</script>

<style>
.container-card {
    width: 80%;
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.container-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.card-image {
    height: 160px; 
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem 0.5rem 0 0;
}

.card-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.card-content {
    padding: 1rem;
}

.card-description {
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #555;
}

h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

h3 {
    font-size: 0.875rem;
    margin: 0;
    color: #888;
}
</style>
