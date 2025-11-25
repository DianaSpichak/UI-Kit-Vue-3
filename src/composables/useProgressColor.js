import { computed } from 'vue'

export function useProgressColor(percent) {
  const dynamicColor = computed(() => {
    if (percent.value <= 35) {
      return 'danger'
    } else if (percent.value <= 70) {
      return 'warning'
    } else {
      return 'success'
    }
  })
  
  return {
    dynamicColor
  }
}