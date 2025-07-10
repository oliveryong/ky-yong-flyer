<template>
  <div :class="[fontProps.family, 'flex w-3xl flex-col overflow-hidden shadow-lg']" :style="flyerStyles">
    <div v-if="propertyProps.imageOne" class="relative">
      <NuxtImg :src="propertyProps.imageOne" alt="Main property image" class="h-80 w-full object-cover" />
      <div
        v-if="propertyProps.price"
        class="absolute right-0 bottom-0 m-3 rounded-md px-6 py-3"
        :style="{ backgroundColor: colorProps.primary }"
      >
        <p class="text-2xl font-extrabold" :style="{ color: colorProps.text }">
          {{ propertyProps.price }}
        </p>
      </div>
    </div>
    <div v-else class="relative flex h-80 w-full items-center justify-center bg-gray-200">
      <p class="text-gray-500">Main Image</p>
      <p class="absolute right-0 bottom-0 px-6 py-3 text-2xl font-extrabold" :style="{ color: colorProps.text }">
        {{ propertyProps.price || '{Property Price}' }}
      </p>
    </div>

    <div class="p-6">
      <h1 class="text-4xl font-bold" :style="{ color: colorProps.primary }">
        {{ propertyProps.name || '{Property Name}' }}
      </h1>
      <p class="mt-1 text-lg opacity-80">
        {{ propertyProps.address || '{Property Address}' }}
      </p>

      <div
        class="mt-6 grid grid-cols-2 gap-4 border-t pt-4 sm:grid-cols-4"
        :style="{ borderColor: colorProps.primary + '30' }"
      >
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-bed-double" size="24" />
          <span v-if="propertyProps.bedroom">{{ propertyProps.bedroom }} Beds</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-bath" size="24" />
          <span v-if="propertyProps.bathroom">{{ propertyProps.bathroom }} Baths</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-car-front" size="24" />
          <span v-if="propertyProps.carspace">{{ propertyProps.carspace }} Spaces</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-cooking-pot" size="24" />
          <span v-if="propertyProps.kitchen">{{ propertyProps.kitchen }} Kitchen</span>
        </div>
      </div>

      <div class="mt-4 opacity-90">
        <div class="capitalize"><b>Type:</b> {{ propertyProps.type || '{Property Type}' }}</div>
        <div><b>Internal Area:</b> {{ propertyProps.internalarea || '{Internal Area}' }}</div>
        <div><b>External Area:</b> {{ propertyProps.externalarea || '{External Area}' }}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 px-6 pb-6">
      <img
        v-if="propertyProps.imageTwo"
        :src="propertyProps.imageTwo"
        alt="Secondary property image 1"
        class="h-48 w-full rounded-md object-cover"
      />
      <img
        v-if="propertyProps.imageThree"
        :src="propertyProps.imageThree"
        alt="Secondary property image 2"
        class="h-48 w-full rounded-md object-cover"
      />
    </div>

    <div class="mt-auto p-6 text-center" :style="{ backgroundColor: colorProps.primary, color: colorProps.background }">
      <h3 class="text-2xl font-bold">{{ agentProps.name || ' Agent Name ' }}</h3>
      <p class="opacity-90">{{ agentProps.company || ' Company Name ' }}</p>
      <div class="mt-2 flex justify-center gap-6 opacity-80">
        <p><b>P:</b> {{ agentProps.phone || '{ Agent Phone }' }}</p>
        <p><b>E:</b> {{ agentProps.email || '{ Agent Email }' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Define the 4 props the component will accept
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
  return {
    backgroundColor: props.colorProps.background,
    color: props.colorProps.text,
    fontSize: `${props.fontProps.size}px`,
    fontWeight: props.fontProps.weight,
    lineHeight: props.fontProps.lineHeight,
  }
})
</script>
