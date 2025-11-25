<script setup>
import { computed, toRef } from 'vue'
import { useProgressColor } from '@/composables/useProgressColor'

const props = defineProps({
  maxWidth: {
    type: String,
    default: '300px'
  },
  percent: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  },
  dynamicColor: {
    type: Boolean,
    default: false
  }
})

const percentRef = toRef(props, 'percent')
const { dynamicColor } = useProgressColor(percentRef)

const progressColor = computed(() => {
  return props.dynamicColor ? dynamicColor.value : props.color
})
</script>

<template>
  <div class="progress-container" :style="[{'max-width': maxWidth}]">
    <span class="progress-percent" :style="[{'color': `var(--${progressColor})`}]">{{percent}}%</span>
    <div class="progress" :style="[{'background': `var(--${progressColor}-hover)`}]">
      <div class="progress-bar" :style="[{'width': `${percent}%`}, {'background': `var(--${progressColor})`}]"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  height: 10px;
  border-radius: 4px;
  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }
  &-bar {
    background: #000;
    height: 100%;
    border-radius: 4px;
    transition: .5s;
  }
  &-percent {
    display: block;
    text-align: center;

    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>