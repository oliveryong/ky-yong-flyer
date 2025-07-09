<template>
  <div class="flex w-full justify-between">
    <!-- SIDEBAR LEFT START -->
    <div class="w-sm flex-col border-r border-l border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div class="flex-1 overflow-y-auto p-6">
        <div class="flex w-full flex-col gap-4">
          <p class="flex items-center gap-2 font-medium">
            <UIcon name="i-heroicons-information-circle" class="h-6 w-6" />
            Property Info
          </p>
          <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">
            Core details of the property, including its location, price, and size.
          </p>
          <UFormField label="Property Name">
            <UInput placeholder="Real Estate XYZ" class="w-full" />
          </UFormField>
          <UFormField label="Address">
            <UInput placeholder="Lot 1, Jalan 2, Taman 3" class="w-full" />
          </UFormField>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UFormField label="Property Price">
              <UInput placeholder="$2000000" class="w-full" />
            </UFormField>
            <UFormField label="Property Type">
              <USelect v-model="propertyData.type" :items="propertyTypeOptions" class="w-full" />
            </UFormField>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UFormField label="Internal Area">
              <UInput placeholder="246sqft" class="w-full" />
            </UFormField>
            <UFormField label="External Area">
              <UInput placeholder="135sqft" class="w-full" />
            </UFormField>
          </div>
          <hr class="border-gray-300 dark:border-gray-700" />
          <p class="flex items-center gap-2 font-medium">
            <UIcon name="i-heroicons-photo" class="h-6 w-6" />
            Property Media
          </p>
          <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">
            Showcase your property with up to 3 images.
          </p>
          <UFormField label="Image 1">
            <div class="flex w-full items-center gap-2">
              <UInput type="file" class="flex-1" accept="image/*" />
              <UButton icon="i-heroicons-x-circle" size="xl" color="error" variant="ghost" />
            </div>
          </UFormField>
          <UFormField label="Image 2">
            <div class="flex w-full items-center gap-2">
              <UInput type="file" class="flex-1" accept="image/*" />
              <UButton icon="i-heroicons-x-circle" size="xl" color="error" variant="ghost" />
            </div>
          </UFormField>
          <UFormField label="Image 3">
            <div class="flex w-full items-center gap-2">
              <UInput type="file" class="flex-1" accept="image/*" />
              <UButton icon="i-heroicons-x-circle" size="xl" color="error" variant="ghost" />
            </div>
          </UFormField>
          <hr class="border-gray-300 dark:border-gray-700" />
          <p class="flex items-center gap-2 font-medium">
            <UIcon name="i-heroicons-home" class="h-6 w-6" />
            Room Specs
          </p>
          <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">
            The number of bedrooms, bathrooms, car spaces, and other key rooms.
          </p>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UFormField label="Bedroom">
              <UInput placeholder="1" class="w-full" />
            </UFormField>
            <UFormField label="Bathroom">
              <UInput placeholder="2" class="w-full" />
            </UFormField>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UFormField label="Car Space">
              <UInput placeholder="3" class="w-full" />
            </UFormField>
            <UFormField label="Kitchen">
              <UInput placeholder="4" class="w-full" />
            </UFormField>
          </div>
          <hr class="border-gray-300 dark:border-gray-700" />
          <p class="flex items-center gap-2 font-medium">
            <UIcon name="i-heroicons-user-circle" class="h-6 w-6" />
            Agent Info
          </p>
          <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">
            Contact details for the agent or person managing the sale.
          </p>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UFormField label="Agent Name">
              <UInput placeholder="John Doe" class="w-full" />
            </UFormField>
            <UFormField label="Agent Email">
              <UInput placeholder="john.doe@email.com" class="w-full" />
            </UFormField>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <UFormField label="Agent Phone">
              <UInput placeholder="+60123456789" class="w-full" />
            </UFormField>
            <UFormField label="Company Name">
              <UInput placeholder="Company XYZ" class="w-full" />
            </UFormField>
          </div>
        </div>
      </div>
      <div
        class="sticky bottom-0 flex w-full justify-end gap-4 border-t border-gray-300 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900"
      >
        <UButton label="Back to Top" size="lg" class="mr-auto" variant="ghost" />
        <UButton label="Reset" size="lg" color="error" variant="outline" />
        <UButton label="Download" size="lg" variant="solid" />
      </div>
    </div>
    <!-- SIDEBAR LEFT END -->

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
                :class="{
                  'cursor-not-allowed border border-gray-300 dark:border-gray-500': colorData.primary == color,
                }"
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
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})
const propertyData = reactive({
  type: 'condominium',
})
const fontData = reactive({
  family: 'font-sans',
  weight: 400,
  lineHeight: 1.5,
  size: 14,
})
const colorData = reactive({
  primary: '#000000',
  background: '#000000',
  text: '#ffffff',
})
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
  {
    label: 'Font Mono',
    value: 'font-mono',
  },
  {
    label: 'Font Sans',
    value: 'font-sans',
  },
  {
    label: 'Font Serif',
    value: 'font-serif',
  },
])
const propertyTypeOptions = ref([
  {
    label: 'Condominium',
    value: 'condominium',
  },
  {
    label: 'Apartment',
    value: 'apartment',
  },
  {
    label: 'Bungalow',
    value: 'bungalow',
  },
  {
    label: 'Terrace House',
    value: 'terrace',
  },
  {
    label: 'Semi Detached House',
    value: 'semidetached',
  },
  {
    label: 'Townhouse',
    value: 'townhouse',
  },
  {
    label: 'Shoplot',
    value: 'shoplot',
  },
])

const primaryChip = computed(() => ({ backgroundColor: colorData.primary }))
const backgroundChip = computed(() => ({ backgroundColor: colorData.background }))
const textChip = computed(() => ({ backgroundColor: colorData.text }))

const setColor = (color) => {
  colorData.primary = color
}
</script>
