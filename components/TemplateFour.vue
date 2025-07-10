<template>
  <div :class="[fontProps.family, 'flex w-3xl flex-col overflow-hidden bg-gray-50 shadow-2xl']" :style="flyerStyles">
    <div class="relative w-full">
      <img
        v-if="propertyProps.imageOne"
        :src="propertyProps.imageOne"
        alt="Main property photograph"
        class="h-96 w-full object-cover"
      />
      <div v-else class="flex h-96 w-full items-center justify-center bg-gray-300 text-gray-500">
        <p>Main Image</p>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-10 text-white">
        <h1 class="text-5xl font-black tracking-wider uppercase">
          {{ propertyProps.name || 'Urban Loft' }}
        </h1>
        <p class="text-xl font-light opacity-90">{{ propertyProps.address || '789 Central District, Metro City' }}</p>
      </div>
      <div
        class="absolute top-6 left-[-10px] px-6 py-2 text-2xl font-bold shadow-lg"
        :style="{ backgroundColor: colorProps.primary, color: colorProps.background }"
      >
        <p>{{ propertyProps.type || '{Type}' }}</p>
      </div>
      <div
        class="absolute top-6 right-[-10px] px-6 py-2 text-2xl font-bold shadow-lg"
        :style="{ backgroundColor: colorProps.primary, color: colorProps.background }"
      >
        <p>{{ propertyProps.price || '{Price}' }}</p>
      </div>
    </div>

    <div class="p-10">
      <div class="grid grid-cols-2 gap-x-6 gap-y-8 text-center md:grid-cols-3" :style="{ color: colorProps.primary }">
        <div class="flex flex-col items-center">
          <UIcon name="i-lucide-bed-double" size="40" />
          <p class="mt-2 text-xl font-bold" :style="{ color: colorProps.text }">
            {{ propertyProps.bedroom || '2' }}<span class="font-normal"> Beds</span>
          </p>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-lucide-bath" size="40" />
          <p class="mt-2 text-xl font-bold" :style="{ color: colorProps.text }">
            {{ propertyProps.bathroom || '2' }}<span class="font-normal"> Baths</span>
          </p>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-lucide-cooking-pot" size="40" />
          <p class="mt-2 text-xl font-bold" :style="{ color: colorProps.text }">
            {{ propertyProps.kitchen || '1' }}<span class="font-normal"> Kitchen</span>
          </p>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-lucide-car-front" size="40" />
          <p class="mt-2 text-xl font-bold" :style="{ color: colorProps.text }">
            {{ propertyProps.carspace || '1' }}<span class="font-normal"> Parking</span>
          </p>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-lucide-ruler" size="40" />
          <p class="mt-2 text-xl font-bold" :style="{ color: colorProps.text }">
            {{ propertyProps.internalarea || '150sqm' }}<span class="font-normal"> Internal</span>
          </p>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-lucide-trees" size="40" />
          <p class="mt-2 text-xl font-bold" :style="{ color: colorProps.text }">
            {{ propertyProps.externalarea || 'N/A' }}<span class="font-normal"> External</span>
          </p>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-4">
        <img
          v-if="propertyProps.imageTwo"
          :src="propertyProps.imageTwo"
          alt="Secondary property view 1"
          class="h-60 w-full object-cover"
        />
        <div v-else class="flex h-60 w-full items-center justify-center bg-gray-200 text-sm text-gray-500">Image 2</div>
        <img
          v-if="propertyProps.imageThree"
          :src="propertyProps.imageThree"
          alt="Secondary property view 2"
          class="h-60 w-full object-cover"
        />
        <div v-else class="flex h-60 w-full items-center justify-center bg-gray-200 text-sm text-gray-500">Image 3</div>
      </div>
    </div>

    <div
      class="mt-auto flex items-center justify-between p-8"
      :style="{ backgroundColor: colorProps.primary, color: colorProps.background }"
    >
      <div>
        <h3 class="text-3xl font-bold uppercase">{{ agentProps.name || 'Agent Name' }}</h3>
        <p class="text-lg opacity-80">{{ agentProps.company || 'City Real Estate' }}</p>
      </div>
      <div class="text-right">
        <div class="flex items-center justify-end gap-3">
          <p class="font-semibold">{{ agentProps.phone || '{Agent Phone}' }}</p>
          <UIcon name="i-lucide-phone" size="20" />
        </div>
        <div class="mt-1 flex items-center justify-end gap-3">
          <p class="font-semibold">{{ agentProps.email || '{Agent Email}' }}</p>
          <UIcon name="i-lucide-mail" size="20" />
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
  return {
    backgroundColor: props.colorProps.background,
    color: props.colorProps.text,
    fontSize: `${props.fontProps.size}px`,
    fontWeight: props.fontProps.weight,
    lineHeight: props.fontProps.lineHeight,
  }
})
</script>
