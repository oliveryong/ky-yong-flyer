<template>
  <header
    class="flex w-full items-center justify-between border-b border-gray-200 bg-gray-100 px-6 py-2 dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="font-bold text-blue-500 dark:text-blue-200">
      <span>K.Y & Yong CO</span>
    </div>
    <UNavigationMenu highlight :items="templateItems" />
    <UNavigationMenu :items="trailingItems" />
  </header>
</template>

<script setup>
const colorMode = useColorMode()
const themeMenuItem = computed(() => ({
  label: colorMode.value === 'dark' ? 'Dark Mode' : 'Light Mode',
  icon: colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun',
  onSelect: toggleTheme,
}))
const templateItems = computed(() => [
  {
    label: 'Template 1',
    icon: 'i-heroicons-bolt',
  },
  {
    label: 'Template 2',
    icon: 'i-heroicons-globe-alt',
  },
  // {
  //   label: "Strata",
  //   icon: "i-heroicons-beaker",
  //   disabled: true,
  // },
  // {
  //   label: "Lumen",
  //   icon: "i-heroicons-fire",
  //   disabled: true,
  // },
  // {
  //   label: "Mosaic",
  //   icon: "i-heroicons-cube-transparent",
  //   disabled: true,
  // },
])
const trailingItems = computed(() => [themeMenuItem.value])

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped></style>
