<template>
    <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary h-full">
        <h3 class="text-2xl font-semibold mb-8 flex items-center text-secondary">
            <img src="../assets/icons/license_24dp.svg" alt="" class="w-8 mr-3">
            Certification
        </h3>

        <div class="relative">
            <!-- Scroll Top -->
            <button v-show="showScrollTop" @click="scrollToTop"
                class="absolute top-0 right-4 z-10 bg-white/80 text-primary p-1 rounded-full shadow-md">
                <i class="fas fa-chevron-up"></i>
            </button>

            <!-- Certification List -->
            <div ref="containerRef" @scroll="checkScrollPosition"
                class="space-y-6 overflow-y-auto max-h-62.5 pr-2 scroll-smooth custom-scrollbar">
                <div v-for="cert in certifications" :key="cert.id"
                    class="relative border-l-4 border-primary pl-4 py-3 hover:bg-gray-100 transition-all">
                    <div class="flex justify-between items-stretch">
                        <div>
                            <h4 class="text-lg font-semibold text-secondary">
                                {{ cert.title }}
                            </h4>
                            <p class="text-primary font-medium">
                                {{ cert.issuer }}
                            </p>
                            <p class="text-gray-600 text-sm">
                                Issued: {{ cert.issuedDate }}
                            </p>
                            <p class="text-gray-600 text-sm">
                                ID: {{ cert.id }}
                            </p>
                        </div>

                        <div class="flex flex-col justify-between items-center px-1 mr-4 ml-4">
                            <img :src="cert.logo" alt="Logo" class="w-12 h-8 object-contain mt-2" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll Bottom -->
            <button v-show="showScrollBottom" @click="scrollToBottom"
                class="absolute bottom-0 right-4 z-10 bg-white/80 text-primary p-1 rounded-full shadow-md">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { certifications } from "../../data/certification";

const containerRef = ref(null);
const showScrollTop = ref(false);
const showScrollBottom = ref(true);

const checkScrollPosition = () => {
    const el = containerRef.value;
    if (!el) return;

    showScrollTop.value = el.scrollTop > 20;
    showScrollBottom.value =
        el.scrollHeight - el.scrollTop - el.clientHeight > 20;
};

const scrollToTop = () => {
    containerRef.value.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToBottom = () => {
    containerRef.value.scrollTo({
        top: containerRef.value.scrollHeight,
        behavior: "smooth",
    });
};

onMounted(() => {
    checkScrollPosition();
});
</script>

<style scoped></style>