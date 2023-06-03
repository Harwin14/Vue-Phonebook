<template>
    <a
        :href="href"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white bg-red-500 border-red-600 hover:bg-red-600 transition-colors cursor-pointer"
    >
        <slot />
    </a>
</template>

<script setup>
const props = defineProps({
    href: String,
});
</script>
