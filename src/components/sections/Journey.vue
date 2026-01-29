<template>
    <section id="journey" class=" bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 py-20">
            <div class="text-center mb-8">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    My Journey
                </h1>
                <p class="text-sm text-gray-600">
                    My experience and research contributions
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <!-- Experience -->
                <div class="bg-white rounded-lg shadow-sm p-6">
                    <JourneyHeader title="Experience" icon="fas fa-briefcase" bgColor="bg-blue-600" />

                    <div class="space-y-6">
                        <ExperienceCard v-for="(experience, index) in experiences" :key="index" :experience="experience"
                            :isLast="index === experiences.length - 1" />
                    </div>
                </div>

                <!-- Research & Publications -->
                <div class="bg-white rounded-lg shadow-sm p-6">
                    <JourneyHeader title="Research & Publications" icon="fa-solid fa-book" bgColor="bg-purple-600" />

                    <div class="space-y-6">
                        <PublicationCard v-for="(publication, index) in publications" :key="index"
                            :publication="publication" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { experiences } from '../../data/journey';
import { publications } from '../../data/journey';
import JourneyHeader from '../cards/JourneyHeader.vue';
import ExperienceCard from '../cards/ExperienceCard.vue';
import PublicationCard from '../cards/PublicationCard.vue';
</script>