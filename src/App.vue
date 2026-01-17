<script setup>
import About from './components/About.vue';
import Education from './components/Education.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Journey from './components/Journey.vue';
import Project from './components/Project.vue';
import Skills from './components/Skills.vue';

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <Header />
    <Hero />
    <About />
    <Education />
    <Journey />
    <Skills />
    <Project />
    <Footer />
  </div>
</template>

<style scoped></style>
