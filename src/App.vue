<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import About from './components/sections/About.vue';
import Hero from './components/sections/Hero.vue';
import Skills from './components/sections/Skills.vue';
import Education from './components/sections/Education.vue';
import Journey from './components/sections/Journey.vue';
import Project from './components/sections/Project.vue';
import Contact from './components/sections/Contact.vue';

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Education />
    <Journey />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped></style>
