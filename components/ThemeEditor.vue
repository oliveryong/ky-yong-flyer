<template>
  <div class="w-2xs flex-col border-r border-l border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
    <div class="flex-1 overflow-y-auto p-6">
      <div class="flex w-full flex-col gap-4">
        <p class="flex items-center gap-2 font-medium">
          <UIcon name="i-heroicons-pencil" class="h-6 w-6" />
          Font Typography
        </p>
        <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">Change the looks of your fonts.</p>
        <UFormField label="Font Family">
          <USelect v-model="fontData.family" :items="fontFamilyOptions" class="w-full" />
        </UFormField>
        <UFormField :label="`Font Size (${fontData.size}px)`">
          <USlider v-model="fontData.size" :min="6" :max="18" :step="1" class="mt-4" :default-value="16" />
        </UFormField>
        <UFormField :label="`Line Height (${fontData.lineHeight})`">
          <USlider v-model="fontData.lineHeight" :min="1" :max="3" :step="0.1" class="mt-4" :default-value="1.5" />
        </UFormField>
        <UFormField :label="`Font Weight (${fontData.weight})`">
          <USlider v-model="fontData.weight" :min="100" :max="900" :step="100" class="mt-4" :default-value="400" />
        </UFormField>
        <hr class="border-gray-300 dark:border-gray-700" />

        <p class="flex items-center gap-2 font-medium">
          <UIcon name="i-heroicons-paint-brush" class="h-6 w-6" />
          Color Theme
        </p>
        <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">Modify the theme of your templates</p>
        <UFormField label="Primary Color">
          <div class="my-2 flex flex-wrap gap-3 rounded-sm bg-gray-200 px-4 py-2 dark:bg-gray-800">
            <span
              v-for="color in colorOptions"
              :key="color"
              :style="{ backgroundColor: color }"
              class="size-5 cursor-pointer rounded-full"
              :class="{ 'border-2 border-blue-500': colorData.primary == color }"
              @click="setColor(color)"
            />
          </div>
          <UPopover>
            <UButton label="Choose color" color="neutral" class="w-full" variant="outline">
              <template #leading>
                <span :style="primaryChip" class="mr-2 size-5 rounded-full" />
              </template>
            </UButton>
            <template #content>
              <UColorPicker v-model="colorData.primary" class="w-full p-2" />
            </template>
          </UPopover>
        </UFormField>
        <UFormField label="Background Color">
          <UPopover>
            <UButton label="Choose color" color="neutral" class="w-full" variant="outline">
              <template #leading>
                <span :style="backgroundChip" class="mr-2 size-5 rounded-full" />
              </template>
            </UButton>
            <template #content>
              <UColorPicker v-model="colorData.background" class="w-full p-2" />
            </template>
          </UPopover>
        </UFormField>
        <UFormField label="Text Color">
          <UPopover>
            <UButton label="Choose color" color="neutral" class="w-full" variant="outline">
              <template #leading>
                <span :style="textChip" class="mr-2 size-5 rounded-full" />
              </template>
            </UButton>
            <template #content>
              <UColorPicker v-model="colorData.text" class="w-full p-2" />
            </template>
          </UPopover>
        </UFormField>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorData = defineModel('colorData', { type: Object })
const fontData = defineModel('fontData', { type: Object })

const colorOptions = ref([
  '#FFFFFF',
  '#FFFFF0',
  '#C0C0C0',
  '#808080',
  '#000000',
  '#FF0000',
  '#A52A2A',
  '#FA8072',
  '#FFC0CB',
  '#FFFF00',
  '#FFD700',
  '#FFA500',
  '#008000',
  '#90EE90',
  '#0000FF',
  '#000080',
  '#ADD8E6',
  '#00FFFF',
  '#800080',
  '#FF00FF',
])

const fontFamilyOptions = ref([
  { label: 'Font Mono', value: 'font-mono' },
  { label: 'Font Sans', value: 'font-sans' },
  { label: 'Font Serif', value: 'font-serif' },
])

const primaryChip = computed(() => ({ backgroundColor: colorData.value.primary }))
const backgroundChip = computed(() => ({ backgroundColor: colorData.value.background }))
const textChip = computed(() => ({ backgroundColor: colorData.value.text }))

const setColor = (color) => {
  colorData.value.primary = color
}
</script>
