<template>
    <section id="journey" class="px-4 pt-20 pb-10 bg-white">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-8">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">My Journey</h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
                <p class="text-gray-600 mt-4">My path and key achievements</p>
            </div>

            <div class="relative min-h-200">
                <div class="absolute left-8 xl:left-1/2 transform xl:-translate-x-px top-0 bottom-8 w-0.5 bg-gray-200">
                </div>


                <!-- Timeline items -->
                <div class="relative z-10 space-y-12 pb-16">
                    <div v-for="(item, index) in journeys" :key="index"
                        class="timeline-item opacity-0 transform translate-y-8" :data-aos="'fade-up'"
                        :data-aos-delay="index * 200">

                        <!-- Content wrapper for XL screens -->
                        <div class="relative flex flex-col xl:flex-row xl:items-center">
                            <!-- Timeline dot -->
                            <div class="absolute left-6 xl:left-1/2 transform xl:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                                :class="colorMap[item.color].bg"></div>

                            <div class="flex flex-col xl:flex-row xl:w-full xl:items-center">
                                <!-- Left Side -->
                                <template v-if="index % 2 === 0">
                                    <div class="ml-16 xl:ml-0 xl:w-1/2 xl:pr-8">
                                        <JourneyCard :journey="item" :is-right="false" />
                                    </div>
                                    <div class="hidden xl:block xl:w-1/2"></div>
                                </template>

                                <!-- Right Side -->
                                <template v-else>
                                    <div class="hidden xl:block xl:w-1/2"></div>
                                    <div class="ml-16 xl:ml-0 xl:w-1/2 xl:pl-8">
                                        <JourneyCard :journey="item" :is-right="true" />
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import { journeys } from "../data/journey";
import { colorMap } from "../utils/colorMap";
import JourneyCard from "./JourneyCard.vue";

onMounted(() => {
    AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
    });
});
</script>

<style scoped></style>