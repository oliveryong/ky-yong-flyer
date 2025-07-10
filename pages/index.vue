<template>
  <div class="flex justify-between">
    <PropertyEditor v-model:property-data="propertyObj" v-model:agent-data="agentObj" />
    <div class="flex-1 p-6">
      <TemplateOne
        v-if="selectedTemplate == 1"
        :property-props="propertyObj"
        :font-props="fontObj"
        :agent-props="agentObj"
        :color-props="colorObj"
      />
    </div>
    <ThemeEditor v-model:color-data="colorObj" v-model:font-data="fontObj" v-model:template-data="selectedTemplate" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

const selectedTemplate = ref(1)

const propertyObj = reactive({
  name: '',
  address: '',
  price: '',
  type: '',
  internalarea: null,
  externalarea: null,
  imageOne: null,
  imageTwo: null,
  imageThree: null,
  bedroom: null,
  bathroom: null,
  kitchen: null,
  carspace: null,
})

const agentObj = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
})

const fontObj = reactive({
  family: 'font-sans',
  weight: 400,
  lineHeight: 1.5,
  size: 14,
})

const colorObj = reactive({
  primary: '#C3C3C3',
  background: '#636363',
  text: '#ffffff',
})
</script>
