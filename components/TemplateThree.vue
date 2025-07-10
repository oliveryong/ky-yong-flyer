<template>
  <div :class="[fontProps.family, 'grid w-3xl grid-cols-3 gap-8 bg-white p-8 shadow-lg']">
    <div class="col-span-2 flex flex-col">
      <header>
        <h1 class="text-2xl font-bold" :style="{ color: colorProps.primary }">
          {{ propertyProps.name || '{Property Name}' }}
        </h1>
        <p class="mt-1 text-lg text-gray-500">
          {{ propertyProps.address || '{Property Address}' }}
        </p>
      </header>

      <div class="mt-6 h-96 w-full overflow-hidden rounded-md bg-gray-200">
        <img
          v-if="propertyProps.imageOne"
          :src="propertyProps.imageOne"
          alt="Main property view"
          class="h-full w-full object-cover"
        />
        <div v-else class="flex h-full w-full items-center justify-center text-gray-500">Main Image</div>
      </div>

      <div class="mt-8">
        <h2 class="mb-3 text-2xl font-bold" :style="{ color: colorProps.primary }">Property Overview</h2>
        <p class="leading-relaxed text-gray-700">
          {{
            propertyProps.description ||
            'A detailed and engaging description of the property will be displayed here, highlighting its best features and unique characteristics to attract potential buyers.'
          }}
        </p>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-4">
        <img
          v-if="propertyProps.imageTwo"
          :src="propertyProps.imageTwo"
          alt="Secondary view 1"
          class="h-48 w-full rounded-md bg-gray-200 object-cover"
        />
        <img
          v-if="propertyProps.imageThree"
          :src="propertyProps.imageThree"
          alt="Secondary view 2"
          class="h-48 w-full rounded-md bg-gray-200 object-cover"
        />
      </div>
    </div>

    <div class="col-span-1 flex flex-col space-y-8 border-l border-gray-200 pl-8">
      <div>
        <p class="text-sm font-medium text-gray-500">Asking Price</p>
        <p class="text-2xl font-extrabold" :style="{ color: colorProps.primary }">
          {{ propertyProps.price || '{Price}' }}
        </p>
      </div>

      <div class="space-y-4">
        <div class="flex items-center gap-3 text-gray-700">
          <UIcon name="i-lucide-bed-double" class="h-6 w-6 opacity-60" />
          <span class="font-medium">{{ propertyProps.bedroom || '0' }} Bedrooms</span>
        </div>
        <div class="flex items-center gap-3 text-gray-700">
          <UIcon name="i-lucide-bath" class="h-6 w-6 opacity-60" />
          <span class="font-medium">{{ propertyProps.bathroom || '0' }} Bathrooms</span>
        </div>
        <div class="flex items-center gap-3 text-gray-700">
          <UIcon name="i-lucide-car-front" class="h-6 w-6 opacity-60" />
          <span class="font-medium">{{ propertyProps.carspace || '0' }} Car Spaces</span>
        </div>
        <div class="flex items-center gap-3 text-gray-700">
          <UIcon name="i-lucide-cooking-pot" class="h-6 w-6 opacity-60" />
          <span class="font-medium">{{ propertyProps.kitchen || '0' }} Car Spaces</span>
        </div>
        <div class="mt-6 space-y-2 border-t border-gray-200 pt-4 text-sm" :style="{ color: colorProps.background }">
          <p><strong>Type:</strong> {{ propertyProps.type || 'N/A' }}</p>
          <p><strong>Internal Area:</strong> {{ propertyProps.internalarea || 'N/A' }}</p>
          <p><strong>External Area:</strong> {{ propertyProps.externalarea || 'N/A' }}</p>
        </div>
      </div>

      <div
        class="mt-auto rounded-lg p-6 text-center"
        :style="{ backgroundColor: colorProps.primary, color: colorProps.background }"
      >
        <h3 class="text-xl font-bold">
          {{ agentProps.name || 'Agent Name' }}
        </h3>
        <p class="text-sm opacity-90">
          {{ agentProps.company || 'Real Estate Company' }}
        </p>
        <hr class="my-4 border-white/20" />
        <div class="space-y-2 text-sm">
          <p class="flex items-center justify-center gap-2">
            <UIcon name="i-lucide-phone" class="h-4 w-4" />
            <span>{{ agentProps.phone || '{Agent Phone}' }}</span>
          </p>
          <p class="flex items-center justify-center gap-2">
            <UIcon name="i-lucide-mail" class="h-4 w-4" />
            <span>{{ agentProps.email || '{Agent Email}' }}</span>
          </p>
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
