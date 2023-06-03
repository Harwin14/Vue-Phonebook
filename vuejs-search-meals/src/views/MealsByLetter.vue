<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
        <router-link
            :to="{ name: 'byLetter', params: { letter } }"
            v-for="letter of letters"
            :key="letter"
            class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
        >
            {{ letter }}
        </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
