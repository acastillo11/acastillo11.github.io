<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();
</script>
<template>
<div class="w-full text-white border-amber-700">
  <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
        <router-link 
              :to="{ name: 'home' }" 
              class="title-link"              
            >
            <svg version="1.1" id="x32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="currentColor">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <rect x="213.519" y="211.484" fill="currentColor" width="18.395" height="31.895"></rect>
              <rect x="274.854" y="211.484" fill="currentColor" width="18.394" height="31.895"></rect>
              <rect x="83.452" y="285.096" fill="currentColor" width="18.401" height="31.882"></rect>
              <rect x="410.14" y="285.096" fill="currentColor" width="18.402" height="31.882"></rect>
              <path fill="currentColor" d="M367.812,163.317V74.993H143.248v88.324H0.007v63.886H0v209.804h166.393h8.466h58.062h8.344h34.053h5.594 h56.231h7.534H512v-189.13v-10.222v-74.339H367.812z M163.412,415.108H21.906V249.103h141.507V415.108z M163.412,236.432h-12.692 h-11.058H124.16h-23.75H84.908h-23.75H45.656h-23.75v-28.589v-22.627h23.75v22.627h15.503v-22.627h23.75v22.627h15.502v-22.627 h23.75v22.627h15.502v-22.627h23.75V236.432z M333.228,415.108h-46.465V362.62c0-15.727-12.753-28.473-28.473-28.473 c-15.726,0-28.473,12.746-28.473,28.473v52.488h-51.978V161.201h155.389V415.108z M345.913,148.114h-12.685h-11.065h-15.502h-23.75 h-15.502h-23.75h-15.502h-23.75h-15.509h-11.058h-12.684V96.898h23.743v22.627h15.509V96.898h23.75v22.627h15.502V96.898h23.75 v22.627h15.502V96.898h23.75v22.627h15.502V96.898h23.75V148.114z M490.101,415.108H348.594V249.103h141.506V415.108z M490.101,236.432h-12.698h-11.052h-15.502h-23.75h-15.502h-23.75h-15.502h-23.75v-28.589v-22.627h23.75v22.627h15.502v-22.627 h23.75v22.627h15.502v-22.627h23.75v22.627h15.502v-22.627h23.75V236.432z"></path>
            </g>
          </g>
        </svg>
        </router-link>  
        <a href="#" class="">
        
      </a>
      <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
    <router-link 
              :to="{ name: 'about' }" 
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"              
            >
            {{ t('about me') }}
    </router-link>   
    <div class="flex flex-row">
        <LanguageSwitcher/>
    </div>   
    </nav>
  </div>
</div>
</template>
<style scoped>
.title-link svg {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  vertical-align: middle;
  fill: white;
}
</style>
