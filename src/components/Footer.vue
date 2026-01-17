<template>
    <footer class="bg-linear-to-r from-gray-800 via-gray-600 to-gray-500 text-white py-12 relative">
        <!-- Decorative top border -->
        <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                <!-- Brand Section -->
                <div class="text-center lg:text-left">
                    <h2 class="text-3xl font-bold mb-2 animate-float">
                        <span class="text-primary">Port</span>folio
                    </h2>
                    <p class="text-gray-300 mb-4">© 2025 Muhammad Hadi Royan Firdaus</p>
                    <div class="flex items-center justify-center lg:justify-start text-gray-300">
                        <span>Made with</span>
                        <img src="../assets/icons/heart-red.svg" alt="" class="w-5 m-1">
                        <span>in Indonesia</span>
                        <img src="../assets/icons/flag-red.svg" alt="" class="w-5 m-1">
                    </div>
                </div>

                <!-- Social Media Section -->
                <div class="flex flex-col items-center lg:items-end space-y-4">
                    <h3 class="text-lg font-semibold text-gray-200 mb-2">
                        Let's Connect
                    </h3>

                    <!-- Social Icons -->
                    <div class="flex space-x-4">
                        <!-- GitHub -->
                        <a href="https://github.com/hadiroyan" target="_blank"
                            class="group bg-gray-700 hover:bg-gray-800 p-3 rounded-full social-hover transition-all duration-300">
                            <img src="../assets/icons/github-white-xl.svg" alt=""
                                class="w-5  group-hover:scale-110 transition-transform duration-300">
                        </a>

                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/hadi-royan" target="_blank"
                            class="group bg-gray-700 hover:bg-blue-600 p-3 rounded-full social-hover transition-all duration-300">
                            <img src="../assets/icons/linkedin-in-white-xl.svg" alt=""
                                class="w-5  group-hover:scale-110 transition-transform duration-300">
                        </a>

                        <!-- Instagram -->
                        <a href="https://www.instagram.com/hadiroyan3/" target="_blank"
                            class="group bg-gray-700 hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full social-hover transition-all duration-300">
                            <img src="../assets/icons/instagram-white-xl.svg" alt=""
                                class="group-hover:scale-110 transition-transform duration-300">
                        </a>
                    </div>

                    <!-- Alternative: Social Links-->
                    <div class="hidden lg:flex flex-col space-y-2 mt-6">
                        <a href="https://github.com/hadiroyan" target="_blank"
                            class="flex items-center text-gray-300 hover:text-[#3b82f6] transition-colors duration-300 group">
                            <img src="../assets/icons/github-white.svg" alt=""
                                class="w-4 mr-2 group-hover:scale-110 transition-transform duration-300">
                            <span class="text-sm">github.com/hadiroyan</span>
                        </a>
                        <a href="https://www.linkedin.com/in/hadi-royan" target="_blank"
                            class="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group">
                            <img src="../assets/icons/linkedin-white.svg" alt=""
                                class="w-4 mr-2 group-hover:scale-110 transition-transform duration-300">
                            <span class="text-sm">linkedin.com/in/hadi-royan/</span>
                        </a>
                        <a href="https://www.instagram.com/hadiroyan3/" target="_blank"
                            class="flex items-center text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
                            <img src="../assets/icons/instagram-white.svg" alt=""
                                class="w-5 mr-2 group-hover:scale-110 transition-transform duration-300">
                            <span class="text-sm">@hadiroyan3</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="mt-8 pt-6 border-t border-gray-600 text-center">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-gray-400 text-sm">
                        Thank you for visiting my portfolio
                    </p>
                    <div class="flex space-x-6 text-sm">
                        <a href="#about" class="hover:text-white text-gray-400 transition-colors duration-300">About</a>
                        <a href="#projects"
                            class="hover:text-white text-gray-400 transition-colors duration-300">Project</a>
                        <!-- <a href="#" class="text-gray-400">Home</a> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute bottom-0 right-0 opacity-5 p-2">
            <img src="../assets/icons/code.svg" alt="" class="w-28">
        </div>
        <div class="absolute top-4 left-4 opacity-25">
            <img src="../assets/icons/laptop-code-gray.svg" alt="" class="w-28">
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped></style>