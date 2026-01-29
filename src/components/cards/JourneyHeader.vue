<template>
    <div class="flex items-center gap-2 mb-6">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="bgColor">
            <i :class="['text-white', icon]"></i>
        </div>
        <h2 class="text-xl font-bold text-gray-900">{{ title }}</h2>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'bg-blue-600'
    }
});
</script>