<template>
    <section id="education" class="bg-gray-100 min-h-screen py-20">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-12">
                Education & Certification
            </h2>

            <div class="grid md:grid-cols-2 gap-10">
                <!-- Education -->
                <div
                    class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary transition-all duration-300 hover:shadow-xl">
                    <h3 class="text-2xl font-semibold mb-6 flex items-center text-secondary">
                        <img src="../assets/icons/graduation-cap.svg" alt="" class="w-8 mr-3">
                        Education
                    </h3>

                    <div class="relative pl-8 border-l-2 border-primary/40 mt-8">
                        <!-- Education Items with v-for -->
                        <div v-for="(edu, index) in educationList" :key="index"
                            :class="['relative', index < educationList.length - 1 ? 'mb-10' : 'mb-6']">
                            <div class="absolute -left-[2.65rem] top-0 flex items-center justify-center">
                                <div
                                    class="w-8 h-8 rounded-full bg-white flex items-center justify-center z-10 shadow-md border-2 border-primary">
                                    <img src="../assets/icons/graduation-cap.svg" :alt="edu.iconAlt" class="w-5">
                                </div>
                            </div>

                            <div>
                                <div class="flex flex-col">
                                    <h4 class="text-lg font-bold text-secondary">
                                        {{ edu.degree }}
                                    </h4>
                                    <p class="text-primary text-sm font-medium">
                                        {{ edu.institution }}
                                    </p>

                                    <div class="text-gray-700 mt-1 flex items-center text-sm">
                                        <img src="../assets/icons/calendar.svg" alt="Calendar" class="mr-2 w-5">
                                        <span>{{ edu.period }}</span>
                                    </div>

                                    <p class="mt-1 text-gray-700 text-sm font-medium">
                                        {{ edu.location }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ================= Certification ================= -->
                <Certification />
            </div>
        </div>
    </section>
</template>

<script setup>
import { educationList } from "../data/education"
import Certification from "./Certification.vue";

</script>