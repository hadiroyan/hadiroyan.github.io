<template>
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col items-center mb-12">
                <h2 class="text-3xl font-bold mb-2">About Me</h2>
                <div class="w-20 h-1 bg-blue-600 mb-6"></div>
                <p class="text-gray-600 text-center max-w-3xl">
                    Get to know me better
                </p>
            </div>

            <div class="flex flex-col md:flex-row gap-10 items-center">
                <div class="md:w-1/3">
                    <img src="/images/profile/2.jpg" alt="About me" class="rounded-lg shadow-lg w-full">
                </div>
                <div class="md:w-2/3">
                    <h3 class="text-2xl font-bold mb-4">Who am I?</h3>
                    <p class="text-gray-600 mb-6 text-justify">I am an informatics graduate from Indonesia with a strong
                        passion for
                        software development and
                        building digital solutions. My technical expertise focuses on software development,
                        particularly Android application development using Java and Kotlin, as well as backend system
                        development with the Spring Framework.
                    </p>
                    <p class="text-gray-600 mb-6 text-justify">
                        I'm constantly learning and adapting whether it's exploring new frameworks, refining my coding
                        practices, or discovering better approaches to problem-solving. I'm eager to apply my skills in
                        a professional environment where I can contribute to innovative projects and grow through
                        real-world experience.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <p class="mb-2">
                                <strong>Name:</strong> Muhammad Hadi Royan Firdaus
                            </p>
                            <p class="mb-2"><strong>Email:</strong> hadiroyanf@gmail.com</p>
                        </div>

                        <div>
                            <p class="mb-2"><strong>Location:</strong> Bogor, Indonesia</p>
                            <p class="mb-2"><strong>Education:</strong> Informatics</p>
                        </div>
                    </div>

                    <!-- CV -->
                    <!-- <a href="#"
                        class="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-lg font-medium inline-flex items-center">
                        <span>Download CV</span>
                        <i class="fas fa-download ml-2"></i>
                    </a> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped></style>