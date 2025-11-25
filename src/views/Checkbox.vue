<script setup>
  import {ref} from 'vue'
  import Checkbox from '@/components/Checkbox/Checkbox.vue'
  import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue'

  const checkboxActive = ref(true)
  const checkboxDisabled = ref(true)
  const checkboxDisabledChecked = ref(true)

  const listOfOptions = ref([
    {name: 'Option 1', id: '1'},
    {name: 'Option 2', id: '2'},
    {name: 'Option 3', id: '3'},
    {name: 'Option 4', id: '4'},
  ])
  const selectedOptions = ref(['2', '4'])

  const switchProfessional = ref(false)
</script>

<template>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"/>
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"/>
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Options: {{selectedOptions}}</p>
    <checkbox-group v-model:value="selectedOptions" name="Options" :options="listOfOptions"/>
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{switchProfessional}}</p>
    <checkbox
      label="I accept"
      id="switch"
      name="switch"
      value="I accept"
      type="switch"
      v-model:checked="switchProfessional"/>
  </div>
</template>