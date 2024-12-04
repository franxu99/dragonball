    <template>
        <div 
        v-if="isVisible" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
        <div class="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative flex flex-col items-center">

            <button 
            @click="$emit('close')" 
            class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
            ✕
            </button>
    
            <div class="flex flex-col items-center space-y-4">
            <img 
                :src="currentTransformation.image" 
                alt="Imagen de {{ currentTransformation.name }}" 
                class="w-full h-[50vh] rounded-md object-contain" 
            />
            <h3 class="text-xl font-bold">{{ currentTransformation.name }}</h3>
            <p class="text-gray-600 text-base">Ki: {{ currentTransformation.ki }}</p>
            </div>
    
            <div class="flex space-x-4 mt-4">
            <button 
                @click="prevTransformation" 
                class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                :disabled="currentIndex === 0"
            >
                Anterior
            </button>
            <button 
                @click="nextTransformation" 
                class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                :disabled="currentIndex === transformations.length - 1"
            >
                Siguiente
            </button>
            </div>
        </div>
        </div>
    </template>
    
    <script setup>
    import { ref, computed } from 'vue';
    
    const props = defineProps({
        isVisible: { 
        type: Boolean, 
        required: true 
        },
        transformations: {
        type: Array,
        required: true,
        },
    });
    
    const emit = defineEmits(['close']);
    const currentIndex = ref(0);
    
    const currentTransformation = computed(() => {
        return props.transformations[currentIndex.value];
    });
    
    const nextTransformation = () => {
        if (currentIndex.value < props.transformations.length - 1) {
        currentIndex.value++;
        }
    };
    
    const prevTransformation = () => {
        if (currentIndex.value > 0) {
        currentIndex.value--;
        }
    };
    </script>
    
    <style>
    img {
        object-fit: contain;
    }
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    </style>
    