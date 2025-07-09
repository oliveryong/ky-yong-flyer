<template>
  <div class="flex w-full justify-between">
    <PropertyEditor v-model:property-data="propertyObj" v-model:agent-data="agentObj" />
    <div class="flex-1 p-6">
      <TemplateOne
        :property-props="propertyObj"
        :font-props="fontObj"
        :agent-props="agentObj"
        :color-props="colorObj"
      />
    </div>
    <ThemeEditor v-model:color-data="colorObj" v-model:font-data="fontObj" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

const propertyObj = reactive({
  name: '',
  address: '',
  price: '',
  type: 'condominium',
  internalarea: 0,
  externalarea: 0,
  imageOne: null,
  imageTwo: null,
  imageThree: null,
  bedroom: 0,
  bathroom: 0,
  kitchen: 0,
  carspace: 0,
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
  primary: '#000000',
  background: '#000000',
  text: '#ffffff',
})
</script>
