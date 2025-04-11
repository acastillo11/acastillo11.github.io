<script>
import { useI18n } from 'vue-i18n'
import HeroImage from '@/components/HeroImage.vue'
import ProjectCards from '@/components/ProjectCards.vue'

export default {
  components: {
    HeroImage,
    ProjectCards,
  },
  setup() {
    const { t, locale } = useI18n()
    const pdfUrl = new URL('../assets/CV_Castillo_Adam.pdf', import.meta.url).href

    return { t, pdfUrl, locale }
  },
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: [
        {
          ca: {
            typewriter: {
              phrases: [
                'Desenvolupo coses interessants.',
                ,
                'Faig dissenys responsius.',
                "Construeix-ho interfícies amigables per a l'usuari.",
                'Implement-ho marcs moderns.',
              ],
            },
          },
          es: {
            typewriter: {
              phrases: [
                'Desarrollo cosas interesantes.',
                'Creo diseños responsivos.',
                'Construyo interfaces amigables para el usuario.',
                'Implemento marcos de trabajo modernos.',
              ],
            },
          },
          en: {
            typewriter: {
              phrases: [
                'i develop interesting things.',
                'i create responsive designs.',
                'i build user-friendly interfaces.',
                'i implement modern frameworks.',
              ],
            },
          },
        },
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      socialLinks: [
        {
          name: 'LinkedIn',
          iconImg: new URL('../assets/images/linkedin.svg', import.meta.url).href,
          url: 'https://www.linkedin.com/in/adam-castillo-p%C3%A9rez-53567b358/',
        },
        // { name: 'InfoJobs', icon: 'infojobs', url: '#' },
        {
          name: 'GitHub',
          iconImg: new URL('../assets/images/github.svg', import.meta.url).href,
          url: 'https://github.com/acastillo11',
        },
      ],
      Skills: [
        {
          name: 'PHP',
          iconImg: new URL('../assets/images/skills/php.svg', import.meta.url).href,
        },
        {
          name: 'JavaScript',
          iconImg: new URL('../assets/images/skills/javascript.svg', import.meta.url).href,
        },
        { name: 'Vue', iconImg: new URL('../assets/images/skills/vue.svg', import.meta.url).href },
        {
          name: 'Tailwind',
          iconImg: new URL('../assets/images/skills/tailwind.svg', import.meta.url).href,
        },
        {
          name: 'HTML5',
          iconImg: new URL('../assets/images/skills/html.svg', import.meta.url).href,
        },
        { name: 'CSS3', iconImg: new URL('../assets/images/skills/css.svg', import.meta.url).href },
      ],
      otherSkills: [
        {
          name: 'Git',
          iconImg: new URL('../assets/images/skills/git.svg', import.meta.url).href,
        },
        {
          name: 'Docker',
          iconImg: new URL('../assets/images/skills/sql-database-generic.svg', import.meta.url).href,
        },
      ],
      projectsData: [
        {
          id: 1,
          title: 'travel schedule',
          description: 'development of a travel management platform organized by an electronic company with mvc structure in backend using php, javascript, html5 and css3.',
          image: new URL('../assets/images/Project1.png', import.meta.url).href,
          technologies: ['PHP', 'Javascript', 'HTML 5', 'CSS 3'],
          link: '#'
        },
        {
          id: 2,
          title: 'Il Padrino - Restaurant',
          description: 'development of a website for a restaurant trying to facilitate the placement of orders, the order process, and the collection of these, using vue.js, Tailwind CSS and php for the development of the api',
          image: new URL('../assets/images/Project2.png', import.meta.url).href,
          technologies: ['Vue.js', 'PrimeVue', 'Tailwind CSS', 'PHP'],
          link: '#'
        },
        {
          id: 3,
          title: 'Personal Portfolio',
          description: 'desenvolupament d\'un lloc web en el meu Githup Pages, fent us de VUE.js, Tailwind CSS',
          image: new URL('../assets/images/Project3.png', import.meta.url).href,
          technologies: ['Vue.js', 'Tailwind CSS'],
          link: '#'
        }
      ]
    }
  },
  methods: {
    typeText() {
      const currentLang = this.locale
      const currentPhrases = this.typeArray[0][currentLang].typewriter.phrases
      const currentPhrase = currentPhrases[this.typeArrayIndex]

      if (this.charIndex < currentPhrase.length) {
        if (!this.typeStatus) this.typeStatus = true

        this.typeValue += currentPhrase.charAt(this.charIndex)
        this.charIndex += 1

        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      const currentLang = this.locale
      const currentPhrases = this.typeArray[0][currentLang].typewriter.phrases
      const currentPhrase = currentPhrases[this.typeArrayIndex]

      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true

        this.typeValue = currentPhrase.substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= currentPhrases.length) this.typeArrayIndex = 0

        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 500)
  },
}
</script>
<template>
  <div>
    <main>
      <section class="h-screen flex flex-row">
        <div class="w-1/2 h-full flex flex-col justify-center items-center">
          <div class="text-left min-w-[400px]">
            <h1 class="text-3xl font-bold mb-3">{{ t('hello') }} 👋</h1>
            <h2 class="text-3xl font-bold mb-3 fade-in-element" style="animation-delay: 0.3s">
              {{ t("i'm adam castillo") }}
            </h2>
            <h2 class="text-3xl font-bold fade-in-element" style="animation-delay: 0.6s">
              <span id="typed-text">{{ t(typeValue) }}</span>
              <span
                id="cursor"
                class="inline-block ml-3 w-1 bg-[#fff]"
                :class="{ typing: typeStatus }"
                >&nbsp;</span
              >
            </h2>
            <div class="flex flex-row mt-2">
              <a
                v-for="(link, index) in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                :class="[
                  'mt-1 mb-1 w-12 h-12 bg-transparent rounded-full flex items-center justify-center fade-in-element',
                  index > 0 ? 'ml-3' : '',
                ]"
                :style="{ animationDelay: `${0.9 + index * 0.2}s` }"
              >
                <img v-if="link.iconImg" :src="link.iconImg" :alt="link.name" class="w-12 h-12" />
              </a>
              <a
                :href="pdfUrl"
                download
                class="ml-6 max-w-6xl justify-center font-extrabold border-2 rounded-md p-3 hover:text-[#111827] hover:bg-white fade-in-element"
                :style="{ animationDelay: `${0.9 + socialLinks.length * 0.2}s` }"
                >{{ t('resume') }}</a
              >
            </div>
          </div>
        </div>
        <div class="w-1/2 h-full">
          <HeroImage />
        </div>
      </section>
      <div class="flex justify-center ml-25 mr-25">
        <p
          class="text-white text-5xl mb-16 mx-auto fade-in-element leading-relaxed text-justify m-4"
          style="animation-delay: 0.2s"
        >
          {{
            t(
              'i am a passionate UI/UX Developer who aims high and works tirelessly to achieve my goals. i believe in pushing boundaries and challenging myself to reach new heights, no matter the obstacles',
            )
          }}
        </p>
      </div>

      <section class="py-16 px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-5xl font-bold text-[#5AB9C1] mb-5 fade-in-element">
            {{ t('my skills') }}
          </h2>
          <p
            class="text-white text-xl mb-16 max-w-2xl fade-in-element"
            style="animation-delay: 0.2s"
          >
            {{
              t(
                'i like to take responsibility to craft aesthetic user experience using moderns architecture',
              )
            }}
          </p>

          <div class="mb-12">
            <h3
              class="uppercase text-white font-bold mb-6 tracking-wider fade-in-element"
              style="animation-delay: 0.3s"
            >
              {{ t('development') }}
            </h3>
            <div class="flex flex-wrap gap-6">
              <div
                v-for="(skill, index) in Skills"
                :key="skill.name"
                class="w-20 h-20 bg-[#1a1c30] rounded-lg flex items-center justify-center text-3xl fade-in-element"
                :style="{ animationDelay: `${0.4 + index * 0.05}s` }"
              >
                <img
                  v-if="skill.iconImg"
                  :src="skill.iconImg"
                  :alt="skill.name"
                  class="w-12 h-12"
                />
                <span v-else>{{ skill.icon }}</span>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <h3
              class="uppercase text-white font-bold mb-6 tracking-wider fade-in-element"
              style="animation-delay: 0.8s"
            >
              {{ t('other skills') }}
            </h3>
            <div class="flex flex-wrap gap-6">
              <div
                v-for="(skill, index) in otherSkills"
                :key="skill.name"
                class="w-20 h-20 bg-[#1a1c30] rounded-lg flex items-center justify-center text-3xl fade-in-element"
                :style="{ animationDelay: `${0.9 + index * 0.05}s` }"
              >
                <img
                  v-if="skill.iconImg"
                  :src="skill.iconImg"
                  :alt="skill.name"
                  class="w-12 h-12"
                />
                <span v-else>{{ skill.icon }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-5xl font-bold text-[#5AB9C1] mb-5 fade-in-element">
            {{ t('my personal projects') }}
          </h2>
          <p
            class="text-white text-xl mb-16 max-w-2xl fade-in-element"
            style="animation-delay: 0.2s"
          >
            {{
              t(
                'i like to take responsibility to craft aesthetic user experience using modern frontend architecture',
              )
            }}
          </p>
          <div>
            <ProjectCards v-for="project in projectsData" :key="project.id" :project="project" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style>
.fade-in-element {
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

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
