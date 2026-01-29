<template>
    <section id="project" class="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div class="max-w-7xl mx-auto">

            <div class="text-center mb-10">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Projects
                </h1>
                <p class="text-md text-gray-600">
                    Explore my latest work and creative projects
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div v-for="(project, index) in projects" :key="index" class="group bg-white 
                    rounded-2xl shadow-md overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-1.5 hover:shadow-xl
                    last:lg:justify-self-center">

                    <!-- Image -->
                    <img :src="project.image" :alt="project.title" class="max-w-full max-h-full object-contain" />

                    <!-- Content -->
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">
                            {{ project.title }}
                        </h3>

                        <p class="text-gray-600 text-sm mb-4">
                            {{ project.description }}
                        </p>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="px-3 py-1 bg-blue-100 text-blue-700
                           text-xs font-semibold rounded-full">
                                {{ tag }}
                            </span>
                        </div>

                        <!-- GitHub -->
                        <a :href="project.githubUrl" target="_blank" class="inline-flex items-center justify-center
                           px-3 py-1 gap-2 w-full border rounded-md 
                           border-blue-600 bg-blue-600 
                           text-white hover:bg-blue-700
                           transition font-medium">
                            <i class="fab fa-github text-xl"></i>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { projects } from '../data/projects';
</script>

<style scoped></style>