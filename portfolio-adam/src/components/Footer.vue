
<script>
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { t } = useI18n();
        
        return { t };
    },
    data() {
        return {
            socialLinks: [
                { name: 'LinkedIn', iconImg: new URL('../assets/images/linkedin.svg', import.meta.url).href, url: 'https://www.linkedin.com/in/adam-castillo-p%C3%A9rez-53567b358/' },
                // { name: 'InfoJobs', icon: 'infojobs', url: '#' },
                { name: 'GitHub', iconImg: new URL('../assets/images/github.svg', import.meta.url).href, url: 'https://github.com/acastillo11' },
            ],
        }
    }
}
</script>

<template>
    <footer class="relative w-full py-32">
        <!-- SVG Wave Background -->
        <div class="absolute inset-0 overflow-hidden">
            <svg class="absolute bottom-0 w-full h-full" 
                 preserveAspectRatio="none" 
                 viewBox="0 0 1440 420">
                <path fill="#0F766E" 
                      fill-opacity="0.9" 
                      d="M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,420L1360,420C1280,420,1120,420,960,420C800,420,640,420,480,420C320,420,160,420,80,420L0,420Z">
                </path>
            </svg>
        </div>

        <!-- Contingut -->
        <div class="relative z-10 flex flex-col items-center justify-end h-full mt-48">
            <div class="text-center space-y-8">
                <h3 class="text-2xl font-semibold text-white">{{ t("contact me on my social media") }}</h3>
                
                <!-- Icones socials -->
                <div class="flex space-x-4 justify-center">
                    <a v-for="(link, index) in socialLinks" :key="link.name" :href="link.url" target="_blank"
                                :class="['mt-1 mb-1 w-12 h-12 bg-transparent rounded-full flex items-center justify-center', index > 0 ? 'ml-3' : '']">
                                <img v-if="link.iconImg" :src="link.iconImg" :alt="link.name" class="w-12 h-12">
                                <i v-else :class="link.icon"></i>
                </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}
</style>