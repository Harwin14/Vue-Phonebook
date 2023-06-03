<template>
    <div class="bg-white shadow-xl rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="rounded-t-xl h-48 w-full object-cover"
            />
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
               {{ $filters.truncateWords(meal.strIntructions, 20) }}
            </p>
            <div class="flex justify-between">
                <YoutubeButton :href="meal.strYoutube"/> 
            </div>
        </div>
    </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object,
    },
});
</script>
