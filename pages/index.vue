<template>
  <div class="flex justify-between">
    <PropertyEditor
      v-model:property-data="propertyObj"
      v-model:agent-data="agentObj"
      @on-generate-p-d-f="handleGeneratePreviewIntoPdf"
    />
    <div class="flex-1 p-6">
      <TemplateOne
        v-if="selectedTemplate == 1"
        id="template_id"
        :property-props="propertyObj"
        :font-props="fontObj"
        :agent-props="agentObj"
        :color-props="colorObj"
      />
      <TemplateTwo
        v-if="selectedTemplate == 2"
        id="template_id"
        :property-props="propertyObj"
        :font-props="fontObj"
        :agent-props="agentObj"
        :color-props="colorObj"
      />
      <TemplateThree
        v-if="selectedTemplate == 3"
        id="template_id"
        :property-props="propertyObj"
        :font-props="fontObj"
        :agent-props="agentObj"
        :color-props="colorObj"
      />
      <TemplateFour
        v-if="selectedTemplate == 4"
        id="template_id"
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
import html2canvas from 'html2canvas-pro'
definePageMeta({
  layout: 'default',
})

const selectedTemplate = ref(3)

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

const handleGeneratePreviewIntoPdf = async () => {
  const captureArea = document.getElementById('template_id')
  try {
    // 3. Use html2canvas to render the element.
    const canvas = await html2canvas(captureArea, {
      useCORS: true, // Important for images from other domains
      scale: 2, // Increase scale for better quality
    })

    // 4. Create a temporary link to trigger the download.
    const link = document.createElement('a')
    link.download = 'flyer-capture.png'
    link.href = canvas.toDataURL('image/png')
    link.click()

    console.log('Image download initiated.')
  } catch (error) {
    console.error('Oops, something went wrong!', error)
  }
}
</script>
