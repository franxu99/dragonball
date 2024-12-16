import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomeView.vue';
import Characters from '../views/CharactersView.vue'
import DetailsView from '@/views/DetailsCharactersView.vue';
import PlanetsView from '@/views/PlanetsView.vue';
import DetailsPlanetView from '@/views/DetailsPlanetView.vue'


const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:'/', name:'Home', component: Home},
        {path:'/personajes', name:'Personajes', component: Characters},
        {path:'/character/:id', name:'Detalles', component: DetailsView},
        {path:'/planets', name:'Planetas', component: PlanetsView},
        {path:'/planet/:id', name:'Planeta', component: DetailsPlanetView},
    ]
})

export default router
