
<template>
    <Card style="width: 25rem; overflow: hidden" class="bg-[#e5e5e5] cursor-pointer card-hover p-5 mt-10" @click="toCharacter(character.id, sagaCharacters)" >
        <template #header class="card-image">
            <img alt="user header" :src="character.image" />
        </template>
        <template #title>{{ character.name }}</template>
        <template #subtitle>{{ character.race }}</template>
        <template #content>
            <p class="m-0 card-description">
                {{character.description}}
            </p>
        </template>
    </Card>
</template>

<script setup>
    import { Card, Button } from 'primevue';
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();

    const props = defineProps({
        character: {
            type: Object,
            required: true,
        },
        sagaCharacters: {
            type: Number,
            required: true,
        }
    });

    const toCharacter = (id, saga) => {
        console.log(saga)
        router.push({
            path:`/character/${id}`,
            query: { saga }
        })
    }
</script>

<style>
.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;  /* Número de líneas que se mostrarán */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efecto cuando el cursor pasa por encima del card */
.card-hover:hover {
    transform: scale(1.05);  /* Hace que el card crezca un 5% */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);  /* Agrega sombra al pasar el cursor */
}

</style>
