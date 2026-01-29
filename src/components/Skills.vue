<template>
    <section id="skills" class="min-h-screen bg-gray-50 p-4 md:py-20">
        <div class="max-w-7xl mx-auto">

            <div class="text-center mb-8">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Skills & Technical Expertise
                </h1>
                <p class="text-sm text-gray-600">
                    Technologies, tools, and frameworks I work with
                </p>
            </div>

            <!-- Technical Expertise & Key Tools -->
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-6">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold text-gray-900">Technical Expertise & Key Tools</h2>
                        <p class="text-sm text-gray-500">Core technologies and frameworks</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div v-for="category in skills" :key="category.name"
                        class="bg-white rounded-lg border border-gray-200 p-5">
                        <div class="flex items-center gap-2 mb-4">
                            <h3 class="font-semibold text-gray-900">{{ category.name }}</h3>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="skill in category.skills" :key="skill"
                                class="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700">
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Development Environment & Tools -->
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-6">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-tools text-white text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900">Development Environment & Tools</h3>
                        <p class="text-sm text-gray-500">Version control and collaboration</p>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div v-for="(tool, index) in tools" :key="index"
                        class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <span class="text-sm font-medium text-gray-700">{{ tool }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { skills } from '../data/skills';
import { tools } from '../data/skills';
</script>

<style scoped></style>