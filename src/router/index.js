import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomeView.vue';
import Characters from '../views/CharactersView.vue'
import DetailsView from '@/views/DetailsView.vue';


const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:'/', name:'Home', component: Home},
        {path:'/personajes', name:'Personajes', component: Characters},
        {path:'/character/:id', name:'Detalles', component: DetailsView}
    ]
})

export default router
