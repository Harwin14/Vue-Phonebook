<template>
    <a
        :href="href"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white bg-orange-500 border-orange-600 hover:bg-orange-600 transition-colors cursor-pointer"
    >
        <slot>YouTube</slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String,
});
</script>
