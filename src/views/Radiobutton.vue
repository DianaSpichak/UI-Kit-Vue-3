<script setup>
import { ref } from 'vue'
import Radiobutton from '@/components/Radiobutton.vue'

const listOfOptions = ref([
  {name: 'Option 1', id: '1'},
  {name: 'Option 2', id: '2'},
  {name: 'Option 3', id: '3'},
  {name: 'Option 4', id: '4'}
])
const selectedOption = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref('Radiobutton Disabled')
</script>

<template>
  <h2 class="heading-2">Standart</h2>
  <div class="line line_block">
    <p>Selecled option: {{selectedOption}}</p>
    <div
      v-for="option in listOfOptions"
      :key="option.id">
      <radiobutton
        :value="option.name"
        :label="option.name"
        :id="option.id"
        name="option"
        v-model:checkedValue="selectedOption"/>
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <radiobutton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="RadiobuttonDisabled"
      name="RadiobuttonDisabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"/>
  </div>
</template>