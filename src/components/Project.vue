<template>
    <section id="projects" class="pt-17 pb-8">
        <div class="container mx-auto px-6">
            <div class="flex flex-col items-center mb-8">
                <h2 class="text-3xl font-bold mb-2">My Projects</h2>
                <div class="w-20 h-1 bg-blue-600 mb-3"></div>
                <p class="text-gray-600 text-center max-w-3xl">
                    A selection of my recent work
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="index" class="group relative rounded-lg overflow-hidden shadow-lg 
                    hover:shadow-2xl transition-shadow duration-300" :data-category="project.category">
                    <div>
                        <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover" />
                        <div class="project-overlay absolute inset-0 bg-blue-600 bg-opacity-90 
                                opacity-0 group-hover:opacity-100 transition-opacity
                                flex flex-col justify-center items-center p-6 text-white">

                            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                            <p class="text-center mb-4">{{ project.description }}</p>
                            <div class="flex space-x-3">
                                <a :href="project.source" target="_blank" rel="noopener noreferrer"
                                    class="border border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full font-medium transition-colors duration-300">
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { projects } from '../data/projects'
</script>

<style scoped></style>