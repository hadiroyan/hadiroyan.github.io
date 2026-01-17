<template>
    <section id="home" class="py-30 bg-linear-to-br from-blue-800 via-blue-600 to-blue-800 text-white">
        <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 flex flex-col items-start ">
                <h1 class="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    Hello, I'm
                    <span class="text-yellow-300">Hadi Royan</span>
                </h1>
                <p class="text-xl mb-8">Software Developer</p>
                <div class="flex flex-wrap gap-4">
                    <!-- <a href="#contact"
                        class="bg-white text-blue-600 hover:bg-blue-100 transition-colors px-6 py-3 rounded-lg font-medium">Get
                        In Touch</a> -->
                    <a href="#projects"
                        class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 transition-colors px-6 py-3 rounded-lg font-medium">
                        View My Work</a>
                </div>
                <div class="flex space-x-4 mt-8">
                    <a href="https://github.com/hadiroyan"
                        class="inline-block transform transition-all duration-300 ease-in-out hover:scale-115 opacity-95 hover:opacity-100">
                        <img src="../assets/icons/github-white.svg" class="w-8" alt="GitHub">
                    </a>
                    <a href="https://www.linkedin.com/in/hadi-royan/"
                        class="inline-block transform transition-all duration-300 ease-in-out hover:scale-115 opacity-95 hover:opacity-100">
                        <img src="../assets/icons/linkedin-white.svg" class="w-8" alt="LinkedIn">
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 mt-10 md:mt-0 hidden md:flex justify-center">
                <img src="/images/profile/1.jpg" alt="profile"
                    class="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl" />
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped></style>