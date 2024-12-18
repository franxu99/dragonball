
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice';
import './index.css'

// Crea la app
const app = createApp(App);

// Configura plugins
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'false',
            cssLayer: false
        }
    }
});
app.use(router);

app.use(ToastService);

// Monta la app
app.mount('#app');


