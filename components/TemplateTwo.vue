<template>
  <div :class="[fontProps.family, 'flex w-3xl flex-col overflow-hidden bg-white shadow-2xl']">
    <div class="relative h-96 w-full">
      <img
        v-if="propertyProps.imageOne"
        :src="propertyProps.imageOne"
        alt="Main property image"
        class="h-full w-full object-cover"
      />
      <div v-else class="flex h-full w-full items-center justify-center bg-gray-300">
        <p class="text-xl text-gray-500">Main Property Image</p>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-8">
        <h1 class="text-5xl font-extrabold text-white shadow-md">
          {{ propertyProps.name || '{Property Name}' }}
        </h1>
        <p class="mt-1 text-lg text-white/90">
          {{ propertyProps.address || '{Property Address}' }}
        </p>
      </div>
    </div>

    <div class="p-8" :style="{ color: colorProps.text }">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="text-4xl font-bold" :style="{ color: colorProps.primary }">
          {{ propertyProps.price || '{Price}' }}
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            <UIcon name="i-lucide-bed-double" class="h-5 w-5 opacity-70" />
            <span>{{ propertyProps.bedroom || '0' }} Beds</span>
          </div>
          <div class="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            <UIcon name="i-lucide-bath" class="h-5 w-5 opacity-70" />
            <span>{{ propertyProps.bathroom || '0' }} Baths</span>
          </div>
          <div class="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            <UIcon name="i-lucide-car-front" class="h-5 w-5 opacity-70" />
            <span>{{ propertyProps.carspace || '0' }} Spaces</span>
          </div>
          <div class="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            <UIcon name="i-lucide-cooking-pot" class="h-5 w-5 opacity-70" />
            <span>{{ propertyProps.kitchen || '0' }} Kitchen</span>
          </div>
        </div>
      </div>

      <hr class="my-6" :style="{ borderColor: colorProps.primary + '20' }" />

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="md:col-span-2">
          <h2 class="mb-2 text-2xl font-bold" :style="{ color: colorProps.primary }">Property Overview</h2>
          <p class="leading-relaxed opacity-80">
            {{
              propertyProps.description ||
              'Enter a compelling description of the property here. Highlight its key selling points, unique features, and the lifestyle it offers. Make it engaging and informative for potential buyers.'
            }}
          </p>
        </div>
        <div class="space-y-2">
          <h3 class="mb-2 text-xl font-bold" :style="{ color: colorProps.primary }">Details</h3>
          <div class="text-sm">
            <span class="opacity-80">
              <b>{{ propertyProps.type || 'N/A' }}</b>
            </span>
          </div>
          <div class="text-sm">
            <strong class="font-medium">Internal Area:</strong>
            <span class="opacity-80">{{ propertyProps.internalarea || 'N/A' }}</span>
          </div>
          <div class="text-sm">
            <strong class="font-medium">External Area:</strong>
            <span class="opacity-80">{{ propertyProps.externalarea || 'N/A' }}</span>
          </div>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-4">
        <img
          v-if="propertyProps.imageTwo"
          :src="propertyProps.imageTwo"
          alt="Secondary property image 1"
          class="h-56 w-full rounded-lg object-cover shadow-md"
        />
        <img
          v-if="propertyProps.imageThree"
          :src="propertyProps.imageThree"
          alt="Secondary property image 2"
          class="h-56 w-full rounded-lg object-cover shadow-md"
        />
      </div>
    </div>

    <div class="mt-auto p-6" :style="{ backgroundColor: colorProps.primary, color: colorProps.background }">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-2xl font-bold">{{ agentProps.name || 'Agent Name' }}</h3>
          <p class="opacity-90">{{ agentProps.company || 'Company Name' }}</p>
        </div>
        <div class="text-right">
          <p class="font-medium"><b>P:</b> {{ agentProps.phone || '{Agent Phone}' }}</p>
          <p class="font-medium"><b>E:</b> {{ agentProps.email || '{Agent Email}' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  propertyProps: {
    type: Object,
    required: true,
  },
  agentProps: {
    type: Object,
    required: true,
  },
  fontProps: {
    type: Object,
    required: true,
  },
  colorProps: {
    type: Object,
    required: true,
  },
})

const flyerStyles = computed(() => {
  return {}
})
</script>
