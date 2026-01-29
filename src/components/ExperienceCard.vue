<template>
    <div class="relative pl-6" :class="{ 'pb-6 border-l-2 border-blue-200': !isLast }">
        <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>

        <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium uppercase">
                {{ experience.type }}
            </span>
            <span class="text-xs text-gray-500">{{ experience.period }}</span>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 mb-1">
            {{ experience.position }}
        </h3>
        <p class="text-sm text-gray-600 mb-3">{{ experience.company }}</p>

        <p class="text-sm text-gray-700 mb-3">
            {{ experience.description }}
        </p>

        <div class="flex flex-wrap gap-2">
            <span v-for="(tech, techIndex) in experience.technologies" :key="techIndex"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {{ tech }}
            </span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    experience: {
        type: Object,
        required: true
    },
    isLast: {
        type: Boolean,
        default: false
    }
});
</script>
<style></style>