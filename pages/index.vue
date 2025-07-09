<template>
  <div class="flex">
    <div class="w-md flex-col border-r border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div class="flex-1 overflow-y-auto p-6">
        <div class="flex w-full flex-col gap-4">
          <p class="flex items-center gap-2 font-medium">
            <UIcon name="i-heroicons-information-circle" class="h-6 w-6" />
            Property Info
          </p>
          <p class="text-sm font-light text-gray-400 italic">
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
              <UInput placeholder="Condominium/Landed" class="w-full" />
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
            <UIcon name="i-heroicons-home" class="h-6 w-6" />
            Room Specs
          </p>
          <p class="text-sm font-light text-gray-400 italic">
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
          <p class="text-sm font-light text-gray-400 italic">
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
        <UButton label="Reset" size="lg" variant="outline" />
        <UButton label="Download" size="lg" variant="solid" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})
</script>
