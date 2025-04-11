<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div 
    class="mb-8 rounded-xl overflow-hidden bg-[#0c6b6d] text-white transition-all duration-300 ease-in-out shadow-md hover:transform hover:-translate-y-1 hover:shadow-xl" 
  > 
    <div class="h-48 w-full overflow-hidden">
      <img 
        v-if="project.image" 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div class="p-6">
      <div>
        <h3 class="text-2xl font-semibold mb-3 capitalize">{{ project.title }}</h3>
        <p class="mb-4 leading-relaxed opacity-90">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="(tech, index) in project.technologies" 
            :key="index" 
            class="bg-white/20 px-3 py-1 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>