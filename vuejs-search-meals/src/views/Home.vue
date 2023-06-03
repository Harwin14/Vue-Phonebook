<template>
    <div class="flex flex-col p-8">
  
        
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "../axiosClient.js";

const ingredients = ref([]);

onMounted(async () => {
    const response = await axios.get("/list.php?i=list");
    console.log(response);
    ingredients.value = response.data;
});
</script>
