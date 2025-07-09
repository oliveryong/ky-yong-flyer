<template>
  <div class="min-h-96 border border-gray-500">
    <div class="template-header w-full p-4">
      {{ props.colorProps }}
    </div>
    <div class="template-header w-full p-4">
      {{ props.propertyProps }}
    </div>
    <div class="template-header w-full p-4">
      {{ props.agentProps }}
    </div>
    <div class="template-header w-full p-4">
      {{ props.fontProps }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  colorProps: {
    type: Object,
    required: true,
  },
  fontProps: {
    type: Object,
    required: true,
  },
  propertyProps: {
    type: Object,
    required: true,
  },
  agentProps: {
    type: Object,
    required: true,
  },
})
</script>
