<script>
import HeroImage from '@/components/HeroImage.vue';

export default {
    components:{
        HeroImage
    },
    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: [
                'I develop interesting things.',
                'I create responsive designs.',
                'I build user-friendly interfaces.',
                'I implement modern frameworks.',
            ],
            typingSpeed: 100,
            erasingSpeed: 100,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0,
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if(!this.typeStatus)
                    this.typeStatus = true;

                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
                this.charIndex += 1;

                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            
            }
        },
        eraseText() { 
            if(this.charIndex > 0){
                if(!this.typeStatus)
                    this.typeStatus = true;

                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            }
            else{
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if(this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0

                setTimeout(this.typeText, this.typingSpeed + 1000)
            }
        }, 
    },
    created(){
            setTimeout(this.typeText, this.newTextDelay + 500);
        },
    
}
</script>
<template>
    <div class="h-screen">
        <main class="h-full">
            <section class="flex flex-row h-full">
                <div class="w-1/2 h-full flex flex-col justify-center items-center">
                    <div class="text-left min-w-[400px]">
                        <h1 class="text-3xl font-bold mb-3">Hello 👋</h1>
                        <h2 class="text-3xl font-bold mb-3">I am Adam Castillo</h2>
                        <h2 class="text-3xl font-bold">
                            <span id="typed-text">{{ typeValue }}</span>
                            <span id="cursor" class="inline-block ml-3 w-1 bg-[#fff]"
                                :class="{ typing: typeStatus }">&nbsp;</span>
                        </h2>
                    </div>
                </div>
                <div class="w-1/2 h-full border border-red-500">
                    <HeroImage />
                </div>
            </section>
        </main>
    </div>
</template>
<style>
@keyframes cursorBlink {
    49% {
        background-color: #fff;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}

span.cursor.typing {
    animation: none;
}

#cursor {
    animation: cursorBlink 1s infinite;
}
</style>
