<template>
    <section id="home" class="pt-25 pb-15 bg-gray-100 to-blue-800 text-gray-700">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 flex flex-col items-start ">
                <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                    Hello, I'm
                    <span class="text-blue-600">Hadi Royan</span>
                </h1>
                <p class="text-2xl lg:text-3xl font-semibold mb-4">Software Developer</p>
                <div class="text-lg mb-8">
                    <p>
                        Android & Backend Developer specializing in Java, Kotlin, and Spring Boot.
                    </p>
                    <p>
                        Passionate about building scalable systems and continuously improving through real-world
                        projects.
                    </p>
                </div>
                <div class="flex flex-wrap gap-4">

                    <a href="#project"
                        class="bg-white text-blue-600 hover:bg-blue-700 hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm font-medium">
                        View My Work
                    </a>
                    <a href="#contact"
                        class="bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm font-medium">
                        Get In Touch
                    </a>
                </div>
                <div class="flex space-x-4 mt-8">
                    <a href="https://github.com/hadiroyan" target="_blank"
                        class="hover:scale-115 transform transition-all duration-300">
                        <i class="fab fa-github text-4xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hadi-royan/" target="_blank"
                        class="text-blue-600 hover:scale-115 transform transition-all duration-300">
                        <i class="fab fa-linkedin text-4xl"></i>
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 mt-10 md:mt-0 hidden md:flex justify-center">
                <img src="/images/profile/1.jpg" alt="profile"
                    class="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl" />
            </div>
        </div>

    </section>
    <div class="bg-white hidden md:flex justify-around px-14 py-6">
        <div class="flex gap-2 items-center">
            <i class="fa-brands fa-java bg-gray-100 text-blue-600 text-xl px-2 py-1 rounded"></i>
            <span class="font-semibold">Java & Spring-boot</span>
        </div>
        <div class="flex gap-2 items-center">
            <i class="fa-brands fa-android bg-gray-100 text-blue-600 text-lg px-2 py-1 rounded"></i>
            <span class="font-semibold">Android</span>
        </div>
        <div class="flex gap-2 items-center">
            <i class="fa-solid fa-database bg-gray-100 text-blue-600 text-lg px-2 py-1 rounded"></i>
            <span class="font-semibold">MySQL</span>
        </div>
        <div class="flex gap-2 items-center">
            <i class="fa-brands fa-git-alt bg-gray-100 text-blue-600 text-lg px-2 py-1 rounded"></i>
            <span class="font-semibold">Git</span>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>