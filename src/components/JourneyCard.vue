<template>
    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 xl:max-w-md"
        :class="isRight ? 'xl:mr-auto' : 'xl:ml-auto'">
        <div class="flex items-center justify-between mb-2" :class="isRight ? '' : 'xl:flex-row-reverse'">
            <span class="text-sm font-medium px-3 py-1 rounded-full" :class="[
                colorMap[journey.color].bgLight,
                colorMap[journey.color].text,
            ]">
                {{ journey.date }}
            </span>
        </div>

        <div :class="isRight ? 'xl:text-left' : 'xl:text-right'">
            <h3 class="text-xl font-bold text-gray-800 mt-3">
                {{ journey.title }}
            </h3>

            <h4 class="text-lg font-semibold text-gray-700 mb-2">
                {{ journey.institution }}
                <div v-if="journey.subtitle" class="text-sm text-gray-500 mt-1">
                    {{ journey.subtitle }}
                </div>
            </h4>

            <ul class="text-gray-600 space-y-2">
                <li v-for="(item, i) in journey.items" :key="i" class="flex items-start">
                    <img src="../assets/icons/check_24dp.svg" alt="" class="mr-1 mt-1 text-sm">
                    <span class="xl:text-justify">{{ item }}</span>
                </li>
            </ul>

        </div>
        <!-- <span class="inline-block text-sm px-3 py-1 rounded-full mb-3"
            :class="[colorMap[journey.color].bgLight, colorMap[journey.color].text]">
            {{ Journey.date }}
        </span>
        <h3 class="text-xl font-bold text-gray-800 mt-3">
            {{ journey.title }}
        </h3>

        <h4 class="text-lg font-semibold text-gray-700">
            {{ journey.institution }}
        </h4>

        <p v-if="journey.subtitle" class="text-sm text-gray-500 mt-1">
            {{ journey.subtitle }}
        </p>

        <ul class="mt-4 space-y-2 text-gray-600">
            <li v-for="(item, i) in journey.items" :key="i" class="flex items-start">
                <img src="../assets/icons/check_24dp.svg" alt="" class="mr-2 mt-1 text-sm">
                <span>{{ item }}</span>
            </li>
        </ul> -->
    </div>
</template>

<script setup>
import { colorMap } from "../utils/colorMap";

defineProps({
    journey: Object,
    isRight: Boolean,
});
</script>
