<template>
    <section id="skills" class="py-20 px-6 bg-linear-to-br from-blue-900 via-blue-700 to-blue-800">
        <div class="container mx-auto max-w-7xl">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-white mb-4 animate-float">
                    Tech Stack
                </h2>
                <p class="text-blue-100 text-lg max-w-2xl mx-auto">
                    Technologies and tools I use to build amazing applications
                </p>
                <div class="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
            </div>

            <!-- Content -->
            <div id="tech-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(skill, index) in skills" :key="index" class="h-full">
                    <div class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border 
                        border-white/20 hover:border-white transition-all duration-500 
                        hover:scale-105 hover:shadow-xl h-full flex flex-col">

                        <div class="text-center mb-6">
                            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                {{ skill.icon }}
                            </div>
                            <h3 class="text-xl font-semibold text-white/70 mb-2 group-hover:text-white 
                                transition-colors duration-300">
                                {{ skill.category }}
                            </h3>
                            <div class="h-1 w-16 bg-cyan-400 mx-auto rounded-full group-hover:w-24 
                                transition-all duration-300">
                            </div>
                        </div>

                        <div class="space-y-4 grow">
                            <div v-for="(tech, techIndex) in skill.technologies" :key="techIndex" class="tech-item flex items-center space-x-3 p-3 rounded-lg bg-white/5 
                            hover:bg-white/10 transition-all duration-300">

                                <div class="w-8 h-8 shrink-0 flex items-center justify-center">
                                    <img :src="tech.icon" :alt="tech.name" :class="[
                                        'w-8 h-8 object-contain hover:scale-110 transition-transform duration-300',
                                        tech.filter || ''
                                    ]" />
                                </div>
                                <span
                                    class="text-blue-100 font-medium group-hover:text-white transition-colors duration-300">
                                    {{ tech.name }}
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer skills -->
            <div class="mt-16 text-center">
                <div class="inline-flex items-center space-x-2 text-blue-200">
                    <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span class="text-sm">Always learning and exploring new technologies</span>
                    <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { skills } from '../data/skills';
</script>

<style scoped></style>