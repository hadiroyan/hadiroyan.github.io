<template>
    <section id="education" class="bg-gray-100 min-h-screen py-20">
        <div class="max-w-7xl mx-auto px-6">

            <div class="text-center mb-8">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Academic & Learning Experience
                </h1>
                <p class="text-sm text-gray-600">
                    Academic background and professional development
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Formal Education -->
                <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i class="fas fa-graduation-cap text-blue-600 text-xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold text-gray-900">Education</h2>
                    </div>

                    <!-- Education Items -->
                    <div v-for="(edu, index) in educations" :key="index" class="mb-4">
                        <div class="flex items-start gap-2 mb-2 justify-between">
                            <span class="text-xs px-2 py-1 rounded font-medium" :class="edu.badgeClass">
                                {{ edu.badge }}
                            </span>
                            <div class="flex items-center justify-center">
                                <span class="font-medium text-sm px-2 py-1 rounded" :class="edu.badgeClass">
                                    {{ edu.year }}
                                </span>
                            </div>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ edu.title }}</h3>
                        <p class="text-sm text-gray-600 mb-3">{{ edu.school }}</p>
                        <p class="text-sm text-gray-700 mb-3 text-justify">{{ edu.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in edu.tags" :key="tag"
                                class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Training -->
                <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-certificate text-white text-xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold text-gray-900">Training</h2>
                    </div>

                    <!-- Training Items -->
                    <div v-for="(training, index) in trainings" :key="index" class="mb-4">
                        <div class="flex items-start gap-2 mb-2">
                            <span class="text-xs px-2 py-1 rounded font-medium" :class="training.badgeClass">
                                {{ training.badge }}
                            </span>
                            <div class="ml-auto w-8 h-8 rounded flex items-center justify-center"
                                :class="training.iconBgClass">
                                <i :class="['fas', training.icon, training.iconColorClass]"></i>
                            </div>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ training.title }}</h3>
                        <p class="text-sm text-gray-600 mb-3">{{ training.provider }}</p>
                        <p class="text-sm text-gray-700 mb-3 text-justify">{{ training.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in training.tags" :key="tag"
                                class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { educations } from '../../data/education';
import { trainings } from '../../data/education';

</script>