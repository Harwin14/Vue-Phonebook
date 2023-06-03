<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
        <div class="px-8 pb-3">
            <input
                type="text"
                v-model="keyword"
                class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
                placeholder="Search for Meals"
                @change="searchMeals"
            />

        </div>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
    } else {
        store.commit("setSearchedMeals", []);
    }
};
// 132465
onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals();
    }
});
</script>

<style></style>
