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
                    <p class="text-gray-300 mb-4">© 2026 Muhammad Hadi Royan Firdaus</p>
                    <div class="flex items-center justify-center lg:justify-start text-gray-300">
                        <span>Made with</span>
                        <i class="fas fa-heart text-[#ef4444] mx-2 animate-heartbeat"></i>
                        <span>in Indonesia</span>
                        <i class="fas fa-flag text-red-500 ml-2"></i>
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
                            <i
                                class="fab fa-github text-xl group-hover:text-primary transition-colors duration-300"></i>
                        </a>

                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/hadi-royan" target="_blank"
                            class="group bg-gray-700 hover:bg-blue-600 p-3 rounded-full social-hover transition-all duration-300">
                            <i
                                class="fab fa-linkedin-in text-xl group-hover:text-white transition-colors duration-300"></i>
                        </a>

                        <!-- Instagram -->
                        <a href="https://www.instagram.com/hadiroyan3/" target="_blank"
                            class="group bg-gray-700 hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full social-hover transition-all duration-300">
                            <i
                                class="fab fa-instagram text-xl group-hover:text-white transition-colors duration-300"></i>
                        </a>
                    </div>

                    <!-- Alternative: Social Links-->
                    <div class="hidden lg:flex flex-col space-y-2 mt-6">
                        <a href="https://github.com/hadiroyan" target="_blank"
                            class="flex items-center text-gray-300 hover:text-[#3b82f6] transition-colors duration-300 group">
                            <i class="fab fa-github mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                            <span class="text-sm">github.com/hadiroyan</span>
                        </a>
                        <a href="https://www.linkedin.com/in/hadi-royan" target="_blank"
                            class="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group">
                            <i class="fab fa-linkedin mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                            <span class="text-sm">linkedin.com/in/hadi-royan/</span>
                        </a>
                        <a href="https://www.instagram.com/hadiroyan3/" target="_blank"
                            class="flex items-center text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
                            <i
                                class="fab fa-instagram mr-3 group-hover:scale-110 transition-transform duration-300"></i>
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
                        <a href="#project"
                            class="hover:text-white text-gray-400 transition-colors duration-300">Project</a>
                        <a href="#" class="hover:text-white text-gray-400 transition-colors duration-300 z-1">Home</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute bottom-0 right-0 opacity-5">
            <i class="fas fa-code text-8xl"></i>
        </div>
        <div class="absolute top-4 left-4 opacity-5">
            <i class="fas fa-laptop-code text-6xl"></i>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped></style>