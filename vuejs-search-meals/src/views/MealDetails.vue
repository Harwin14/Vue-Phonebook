<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category : </strong
                >{{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area : </strong>{{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags : </strong>{{ meal.strTags }}
            </div>
        </div>
<div class="my-3">
    {{ meal.strInstructions }}
</div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li
                            v-if="meal[`strIngredient${index + 1}`]"
                            :key="index"
                        >
                            {{ index + 1 }}.
                            {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]" :key="index">
                            {{ index + 1 }}.
                            {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
                <a
                    :href="meal.strSource"
                    target="_blank"
                    class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                >
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0] || {};
    });
});
</script>
