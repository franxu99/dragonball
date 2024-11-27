<template>
    <div>details</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getCharacter } from '@/store/data';

const character = ref({})
const route = useRoute();
onMounted( async () => {
    const saga = route.query.saga;
    const characterId = route.params.id;
    console.log("Personaje ID:", characterId);
    console.log("Saga:", saga);
    const sagaInt = parseInt(saga, 10);
    character.value = await getCharacter(sagaInt, characterId);
})







</script>
