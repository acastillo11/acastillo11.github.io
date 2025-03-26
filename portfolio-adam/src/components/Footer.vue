<script>
export default {
    data() {
        return {
            socialLinks: [
                { name: 'LinkedIn', icon: 'linkedin', url: '#' },
                { name: 'GitHub', icon: 'github', url: '#' },
                { name: 'Medium', icon: 'medium', url: '#' },
                { name: 'Instagram', icon: 'instagram', url: '#' },
                { name: 'Facebook', icon: 'facebook', url: '#' },
                { name: 'Dribbble', icon: 'dribbble', url: '#' },
                { name: 'Behance', icon: 'behance', url: '#' },
                { name: 'Twitter', icon: 'twitter', url: '#' },
                { name: 'Codepen', icon: 'codepen', url: '#' }
            ]
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
                <h3 class="text-2xl font-semibold text-white">Connect with me on social media.</h3>
                
                <!-- Icones socials -->
                <div class="flex space-x-4">
                    <a v-for="link in socialLinks" 
                       :key="link.name"
                       :href="link.url"
                       class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <i :class="link.icon"></i>
                    </a>
                </div>
                
                <!-- Botons -->
                <div class="flex space-x-4 justify-center">
                    <button class="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-teal-800 transition-colors">
                        Resume
                    </button>
                    <button class="px-6 py-2 bg-white text-teal-800 hover:bg-gray-200 transition-colors">
                        Let's Talk
                    </button>
                </div>
                
                <!-- Crèdits -->
                <p class="text-white text-sm">
                    Designed and Developed with <span class="text-red-500">❤</span> by Adam
                </p>
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