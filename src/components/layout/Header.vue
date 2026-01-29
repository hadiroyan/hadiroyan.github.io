<template>
    <header class="sticky top-0 bg-white shadow-xs z-50">
        <nav class="px-6 py-4">
            <div class="flex items-center justify-between mx-auto px-10">
                <!-- <a href="#" class="text-2xl font-bold text-blue-500">
                    <img src="/images/logo.png" alt="Logo" class="w-10 h-10">
                </a> -->
                <div class="shrink-0">
                    <a href="#" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div
                            class="text-xs bg-blue-600 rounded-sm p-1 flex items-center justify-center text-white font-bold">
                            HR
                        </div>
                        <span class="font-medium">Hadi Royan</span>
                    </a>
                </div>

                <!-- Mobile navigation button -->
                <div class="md:hidden">
                    <button @click="toggleMobileMenu" class="text-gray-500 hover:text-blue-600 focus:outline-none p-2">
                        <img :src="isMobileMenuOpen ? closeButton : menuButton" alt="Menu" class="w-6 h-6">
                    </button>
                </div>

                <!-- Desktop navigation -->
                <div class="hidden md:flex space-x-4 text-md">
                    <a v-for="item in menuItems" :key="item.href" :href="item.href"
                        class="nav-link text-gray-700 hover:text-blue-600 transition-colors">
                        {{ item.label }}
                    </a>
                </div>
            </div>

            <!-- Mobile Menu - Floating dropdown -->
            <div v-show="isMobileMenuOpen"
                class="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t-4 border-blue-500 z-40 backdrop-blur-sm">
                <div class="mx-auto px-6 py-4">
                    <div class="flex flex-col space-y-1">
                        <a v-for="item in menuItems" :key="item.href" :href="item.href" @click="closeMobileMenu"
                            class="group flex items-center text-gray-700 px-1 py-1 hover:text-blue-600 transition-colors">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span class="font-medium">{{ item.label }}</span>
                        </a>
                    </div>

                    <div class="mt-4 h-1 bg-linear-to-r from-blue-700 via-blue-400 to-sky-600 rounded-full"></div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import menuButton from '../../assets/icons/menu_24dp-black.svg'
import closeButton from '../../assets/icons/close_24dp-black.svg'

const isMobileMenuOpen = ref(false)

const menuItems = [
    // { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#journey', label: 'Journey' },
    { href: '#project', label: 'Project' },
    { href: '#contact', label: 'Contact' },
]

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #3b82f6;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}
</style>