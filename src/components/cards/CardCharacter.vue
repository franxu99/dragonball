<template>
    <div 
    class="container-card cursor-pointer p-5 mt-10 rounded-lg shadow-md hover:shadow-lg transition-transform"
    @click="toCharacter(character.id, sagaCharacters)"
    >
    <div class="card-image w-full h-40 overflow-hidden rounded-t-lg flex items-center justify-center bg-gray-100">
        <img 
        alt="user header" 
        :src="character.image" 
        class="max-w-full max-h-full"
        />
    </div>
    <div class="card-content p-4">
        <h2 class="text-lg font-semibold text-gray-800 truncate">
        {{ character.name }}
        </h2>
        <h3 class="text-sm text-gray-500">
        {{ character.race }}
        </h3>
        <p class="m-0 card-description text-gray-600 mt-2">
        {{ character.description }}
        </p>
    </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    character: {
    type: Object,
    required: true,
    },
});

const toCharacter = (id, saga) => {
    router.push({
    path: `/character/${id}`,
    query: { saga },
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
