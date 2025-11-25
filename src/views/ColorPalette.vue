<script setup>
import { computed } from 'vue';
import ColorPalette from '@/components/ColorPalette.vue';

const getCssVariable = (variableName) => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${variableName}`)
      .trim();
  }
  return '';
};

const colorItems = computed(() => [
  { label: 'Primary', variable: 'primary' },
  { label: 'Primary Hover', variable: 'primary-hover' },
  { label: 'Secondary', variable: 'second' },
  { label: 'Secondary Hover', variable: 'second-hover' },
  { label: 'Success', variable: 'success' },
  { label: 'Success Hover', variable: 'success-hover' },
  { label: 'Info', variable: 'info' },
  { label: 'Info Hover', variable: 'info-hover' },
  { label: 'Warning', variable: 'warning' },
  { label: 'Warning Hover', variable: 'warning-hover' },
  { label: 'Danger', variable: 'danger' },
  { label: 'Danger Hover', variable: 'danger-hover' },
]);
</script>

<template>
    <div class="heading-4">
        COLOR PALETTE
        <hr class="custom-line">
    </div>
    <div class="column">
        <ColorPalette 
            v-for="item in colorItems"
            :key="item.variable"
            :label="item.label"
            :color="item.variable"
            :hexcode="getCssVariable(item.variable)"
            disabled
        />
    </div>
</template>

