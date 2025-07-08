<template>
  <header
    class="w-full flex justify-between items-center py-2 px-6 bg-gray-100 dark:bg-gray-800"
  >
    <div class="font-bold text-blue-500 dark:text-blue-200">
      <span>K.Y & Yong CO</span>
    </div>
    <UNavigationMenu highlight :items="templateItems" />
    <UNavigationMenu :items="trailingItems" />
  </header>
</template>

<script setup>
const colorMode = useColorMode();
const themeMenuItem = computed(() => ({
  label: colorMode.value === "dark" ? "Dark Mode" : "Light Mode",
  icon: colorMode.value === "dark" ? "i-heroicons-moon" : "i-heroicons-sun",
  onSelect: toggleTheme,
}));
const templateItems = computed(() => [
  {
    label: "Flux",
    icon: "i-heroicons-bolt",
  },
  {
    label: "Prism",
    icon: "i-heroicons-globe-alt",
  },
  {
    label: "Strata",
    icon: "i-heroicons-beaker",
  },
  {
    label: "Lumen",
    icon: "i-heroicons-fire",
  },
  {
    label: "Mosaic",
    icon: "i-heroicons-cube-transparent",
  },
]);
const trailingItems = computed(() => [themeMenuItem.value]);

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style lang="scss" scoped></style>
