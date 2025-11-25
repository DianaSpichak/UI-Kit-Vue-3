<script setup>
import {ref} from 'vue'
import ProgressBar from '@/components/Progress/ProgressBar.vue'
import ProgressCircle from '@/components/Progress/ProgressCircle.vue'
import Button from '@/components/Button.vue'

const percentBar = ref(30)
const dynamicPercentBar = ref(80)
const percentCircle = ref(30)
const dynamicPercentCircle = ref(80)

const addPercentBar = () => {
  percentBar.value += 10
  if (percentBar.value > 100) {
    percentBar.value = 100
  }
}

const reducePercentBar = () => {
  percentBar.value -= 10
  if (percentBar.value < 0) {
    percentBar.value = 0
  }
}

const addPercentBarDynamic = () => {
  dynamicPercentBar.value += 10
  if (dynamicPercentBar.value > 100) {
    dynamicPercentBar.value = 100
  }
}

const reducePercentBarDynamic = () => {
  dynamicPercentBar.value -= 10
  if (dynamicPercentBar.value < 0) {
    dynamicPercentBar.value = 0
  }
}

const addPercentCircle = () => {
  percentCircle.value += 10
  if (percentCircle.value > 100) {
    percentCircle.value = 100
  }
}

const reducePercentCircle = () => {
  percentCircle.value -= 10
  if (percentCircle.value < 0) {
    percentCircle.value = 0
  }
}

const addPercentCircleDynamic = () => {
  dynamicPercentCircle.value += 10
  if (dynamicPercentCircle.value > 100) {
    dynamicPercentCircle.value = 100
  }
}

const reducePercentCircleDynamic = () => {
  dynamicPercentCircle.value -= 10
  if (dynamicPercentCircle.value < 0) {
    dynamicPercentCircle.value = 0
  }
}
</script>

<template>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percent="percentBar" color="primary" :dynamic-color="false"/>
    <Button label="Reduce 10%" @click="reducePercentBar"/>
    <Button label="Add 10%" @click="addPercentBar"/>
  </div>
  <h2 class="heading-2">Dynamic Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percent="dynamicPercentBar" :dynamic-color="true"/>
    <Button label="Reduce 10%" @click="reducePercentBarDynamic"/>
    <Button label="Add 10%" @click="addPercentBarDynamic"/>
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="percentCircle" :dynamic-color="false"/>
    <Button label="Reduce 10%" @click="reducePercentCircle"/>
    <Button label="Add 10%" @click="addPercentCircle"/>
  </div>

  <h2 class="heading-2">Dynamic Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="dynamicPercentCircle" :dynamic-color="true"/>
    <Button label="Reduce 10%" @click="reducePercentCircleDynamic"/>
    <Button label="Add 10%" @click="addPercentCircleDynamic"/>
  </div>
</template>