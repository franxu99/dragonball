
    <template>
        <div class="h-[90vh] w-[100vw] flex justify-center items-center">
            <div class="card-profile bg-white shadow-lg rounded-2xl flex overflow-hidden">
                <div class="w-1/3 bg-gradient-to-t from-gray-200 to-gray-100 p-6 flex flex-col items-center">
                <img 
                    :src="character.image" 
                    alt="Imagen de {{ character.name }}" 
                    class="rounded-full border-4 border-white shadow-md w-[38%] object-cover mb-4"
                />
                <h3 class="text-3xl font-bold text-gray-800 mb-2">{{ character.name }}</h3>
                <h4 class="text-gray-500 text-sm uppercase tracking-wide">{{ character.race }}</h4>
                </div>
        
                <div class="w-2/3 p-6 flex flex-col">
                <!-- Tabs -->
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
        
                <!-- Contenido -->
                <div class="tab-content flex-grow overflow-auto">
                    <div v-if="activeTab === 'Descripción'">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Descripción</h2>
                    <p class="text-gray-600 text-base leading-relaxed">{{ character.description }}</p>
                    </div>
        
                    <div v-else-if="activeTab === 'Detalles'">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Detalles</h2>
                    <ul class="text-gray-600 text-base space-y-2">
                        <li><strong>Afiliación:</strong> {{ character.affiliation }}</li>
                        <li><strong>Género:</strong> {{ character.gender }}</li>
                        <li><strong>Planeta de Origen:</strong> {{ character.originPlanet?.name }}</li>
                        <li><strong>Ki Máximo:</strong> {{ character.maxKi }}</li>
                    </ul>
                    </div>
        
                    <div v-else-if="activeTab === 'Transformaciones'">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Transformaciones</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div 
                        v-for="transformation in character.transformations" 
                        :key="transformation.id" 
                        class="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg shadow-sm cursor-pointer"
                        @click="showTransformations"
                        >
                        <img 
                            :src="transformation.image" 
                            alt="Transformación {{ transformation.name }}" 
                            class="w-16 h-16 rounded-md object-contain"
                        />
                        <div>
                            <h4 class="font-medium text-gray-800">{{ transformation.name }}</h4>
                            <p class="text-sm text-gray-600">Ki: {{ transformation.ki }}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <PopUpImg 
                :isVisible="isModalVisible" 
                :transformations="transformations"
                @close="isModalVisible = false" 
            />
            
        </div>
    </template>
    
    <script setup>
    import { useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import { getCharacter } from '@/store/data';
    import PopUpImg from '@/components/PopUps/PopUpImg.vue';

    const character = ref({});
    const tabs = ["Descripción", "Detalles", "Transformaciones"];
    const activeTab = ref(tabs[0]);
    const transformations = ref([]);

    const isModalVisible = ref(false);

    const showTransformations = () => {
    isModalVisible.value = true;
    };

    const route = useRoute();
    onMounted(async () => {
    const characterId = route.params.id;
    character.value = await getCharacter(characterId);
    transformations.value = character.value.transformations || [];
    });
    </script>

    
    <style>
    .card-profile {
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
    