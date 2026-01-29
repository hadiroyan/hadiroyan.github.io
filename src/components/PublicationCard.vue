<template>
    <div class="relative pl-6 border-l-2 border-purple-200">
        <div class="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>

        <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium uppercase">
                {{ publication.type }}
            </span>
            <span class="text-xs text-gray-500">{{ publication.year }}</span>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-snug">
            {{ publication.title }}
        </h3>

        <!-- Paper Details -->
        <div class="mb-3">
            <p v-if="publication.journal" class="text-sm text-gray-600 mb-1">
                <span class="font-medium">Journal:</span> {{ publication.journal }}
            </p>
            <p v-if="publication.accreditation" class="text-sm text-gray-600 mb-1">
                <span class="font-medium">Accreditation:</span> {{ publication.accreditation }}
            </p>
            <p v-if="publication.authors" class="text-sm text-gray-600">
                <span class="font-medium">Authors:</span> {{ publication.authors }}
            </p>
        </div>

        <p class="text-sm text-gray-700 mb-4 text-justify">
            {{ publication.description }}
        </p>

        <!-- Keywords -->
        <div v-if="publication.keywords" class="flex flex-wrap gap-2 mb-4">
            <span v-for="(keyword, keyIndex) in publication.keywords" :key="keyIndex"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {{ keyword }}
            </span>
        </div>

        <!-- View Publication Link -->
        <a v-if="publication.link" :href="publication.link" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            <i class="fas fa-arrow-up-right-from-square"></i>
            View Publication
        </a>
    </div>
</template>

<script setup>
defineProps({
    publication: {
        type: Object,
        required: true
    }
});
</script>

<style></style>