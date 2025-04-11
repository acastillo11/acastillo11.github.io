<template>
  <div class="mt-2 ml-2">
    <button @click="setLanguage('ca')" style="margin-right: 8px" class="cursor-pointer">
      <img src="@/assets/images/Flag_of_Catalonia.png" alt="Cat" class="w-8 h-4 " />
    </button>
    <button @click="setLanguage('es')" style="margin-right: 8px" class="cursor-pointer">
      <img src="@/assets/images/Flag_of_Spain.png" alt="Es" class="w-8 h-4 object-cover object-center" />
    </button>
    <button @click="setLanguage('en')" style="margin-right: 8px" class="cursor-pointer">
      <img src="@/assets/images/Flag_of_the_United_Kingdom.png" alt="Eng" class="w-8 h-4 object-cover object-center" />
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'

const { locale } = useI18n()

const setLanguage = (newLang) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})
</script>
