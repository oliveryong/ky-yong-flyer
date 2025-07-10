<template>
  <div class="flex w-sm flex-col border-r border-l border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
    <div class="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
      <!-- <div class="flex w-full flex-col gap-4"> -->
      <p class="flex items-center gap-2 font-medium">
        <UIcon name="i-heroicons-photo" class="h-6 w-6" />
        Property Media
      </p>
      <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">
        Showcase your property with up to 3 images.
      </p>
      <UFormField label="Image 1">
        <div class="flex w-full items-center gap-2">
          <UInput type="file" class="flex-1" accept="image/*" @change="handleImageUpload($event, 'imageOne')" />
          <UButton
            icon="i-heroicons-x-circle"
            size="xl"
            color="error"
            variant="ghost"
            @click="propertyData.imageOne = null"
          />
        </div>
      </UFormField>
      <UFormField label="Image 2">
        <div class="flex w-full items-center gap-2">
          <UInput type="file" class="flex-1" accept="image/*" @change="handleImageUpload($event, 'imageTwo')" />
          <UButton
            icon="i-heroicons-x-circle"
            size="xl"
            color="error"
            variant="ghost"
            @click="propertyData.imageTwo = null"
          />
        </div>
      </UFormField>
      <UFormField label="Image 3">
        <div class="flex w-full items-center gap-2">
          <UInput type="file" class="flex-1" accept="image/*" @change="handleImageUpload($event, 'imageThree')" />
          <UButton
            icon="i-heroicons-x-circle"
            size="xl"
            color="error"
            variant="ghost"
            @click="propertyData.imageThree = null"
          />
        </div>
      </UFormField>
      <hr class="border-gray-300 dark:border-gray-700" />
      <p class="flex items-center gap-2 font-medium">
        <UIcon name="i-heroicons-information-circle" class="h-6 w-6" />
        Property Info
      </p>
      <p class="text-sm font-light text-gray-500 italic dark:text-gray-400">
        Core details of the property, including its location, price, and size.
      </p>

      <UFormField label="Property Name">
        <UInput v-model="propertyData.name" placeholder="Real Estate XYZ" class="w-full" />
      </UFormField>
      <UFormField label="Address">
        <UInput v-model="propertyData.address" placeholder="Lot 1, Jalan 2, Taman 3" class="w-full" />
      </UFormField>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <UFormField label="Property Price">
          <UInput v-model="propertyData.price" placeholder="$2000000" class="w-full" />
        </UFormField>
        <UFormField label="Property Type">
          <USelect v-model="propertyData.type" placeholder="Type" :items="propertyTypeOptions" class="w-full" />
        </UFormField>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <UFormField label="Internal Area">
          <UInput v-model="propertyData.internalarea" placeholder="246sqft" class="w-full" />
        </UFormField>
        <UFormField label="External Area">
          <UInput v-model="propertyData.externalarea" placeholder="135sqft" class="w-full" />
        </UFormField>
      </div>
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
          <UInput v-model="propertyData.bedroom" placeholder="1" class="w-full" />
        </UFormField>
        <UFormField label="Bathroom">
          <UInput v-model="propertyData.bathroom" placeholder="2" class="w-full" />
        </UFormField>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <UFormField label="Car Space">
          <UInput v-model="propertyData.carspace" placeholder="3" class="w-full" />
        </UFormField>
        <UFormField label="Kitchen">
          <UInput v-model="propertyData.kitchen" placeholder="4" class="w-full" />
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
          <UInput v-model="agentData.name" placeholder="John Doe" class="w-full" />
        </UFormField>
        <UFormField label="Agent Email">
          <UInput v-model="agentData.email" placeholder="john.doe@email.com" class="w-full" />
        </UFormField>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <UFormField label="Agent Phone">
          <UInput v-model="agentData.phone" placeholder="+60123456789" class="w-full" />
        </UFormField>
        <UFormField label="Company Name">
          <UInput v-model="agentData.company" placeholder="Company XYZ" class="w-full" />
        </UFormField>
      </div>
      <!-- </div> -->
    </div>
    <div
      class="sticky bottom-0 flex w-full justify-end gap-4 border-t border-gray-300 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900"
    >
      <UButton
        :label="themeButton.label"
        :icon="themeButton.icon"
        size="lg"
        class="mr-auto"
        variant="ghost"
        @click="toggleTheme"
      />
      <UButton label="Reset" size="lg" color="error" variant="outline" @click="handleReset" />
      <UButton label="Download" size="lg" variant="solid" disabled @click="handleGeneratePdf" />
    </div>
  </div>
</template>

<script setup>
const propertyData = defineModel('propertyData', { type: Object })
const agentData = defineModel('agentData', { type: Object })
const emits = defineEmits(['onGeneratePDF'])

const colorMode = useColorMode()
const themeButton = computed(() => ({
  label: colorMode.value === 'dark' ? 'Dark Mode' : 'Light Mode',
  icon: colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun',
}))

const handleGeneratePdf = () => {
  emits('onGeneratePDF')
}

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const handleImageUpload = (event, imageKey) => {
  const file = event.target.files[0]
  if (!file) {
    propertyData.value[imageKey] = null
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    propertyData.value[imageKey] = e.target.result
  }

  reader.readAsDataURL(file)
}

const handleReset = () => {
  propertyData.value.name = ''
  propertyData.value.address = ''
  propertyData.value.price = ''
  propertyData.value.type = ''
  propertyData.value.internalarea = null
  propertyData.value.externalarea = null
  propertyData.value.imageOne = null
  propertyData.value.imageTwo = null
  propertyData.value.imageThree = null
  propertyData.value.bedroom = null
  propertyData.value.bathroom = null
  propertyData.value.kitchen = null
  propertyData.value.carspace = null
  agentData.value.name = ''
  agentData.value.email = ''
  agentData.value.phone = ''
  agentData.value.company = ''
}

const propertyTypeOptions = ref([
  { label: 'Condominium', value: 'Condominium' },
  { label: 'Apartment', value: 'Apartment' },
  { label: 'Bungalow', value: 'Bungalow' },
  { label: 'Terrace House', value: 'Terrace' },
  { label: 'Semi Detached House', value: 'Semi Detached' },
  { label: 'Shoplot', value: 'Shoplot' },
])
</script>
