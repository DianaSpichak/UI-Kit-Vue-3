<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  hexcode: {
    type: String,
    default: '#6979f8'
  },
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div class="color-palette-line">
    <button
        :class="['color-palette-line__btn', `color-palette-line__btn--${color}`]"
        :disabled="disabled"
    >
    </button>
    <div class="color-palette-line__label">
      {{ label }}
    </div>
    <div class="color-palette-line__hexcode">
      {{ hexcode }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-palette-line {
  display: grid;
  grid-template-columns: 60px 200px 80px;
  margin-bottom: 20px;
  gap: 20px;
  align-items: center;

  &__btn {
    margin-right: 10px;
    padding: 0 20px;
    height: 40px;
    width: 40px;
    color: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: .2s;
    &--primary {
      background: var(--primary);
      border: 1px solid var(--primary);
      &:enabled:hover {
        background: var(--primary-hover);
      }
      &-hover {
        background: var(--primary-hover);
      }
    }
    &--second {
      background: var(--second);
      border: 1px solid var(--second);
      &:enabled:hover {
        background: var(--second-hover);
      }
      &-hover {
        background: var(--second-hover);
      }
    }
    &--success {
      background: var(--success);
      border: 1px solid var(--success);
      &:enabled:hover {
        background: var(--success-hover);
      }
      &-hover {
        background: var(--success-hover);
      }
    }
    &--info {
      background: var(--info);
      border: 1px solid var(--info);
      &:enabled:hover {
        background: var(--info-hover);
      }
      &-hover {
        background: var(--info-hover);
      }
    }
    &--warning {
      background: var(--warning);
      border: 1px solid var(--warning);
      &:enabled:hover {
        background: var(--warning-hover);
      }
      &-hover {
        background: var(--warning-hover);
      }
    }
    &--danger {
      background: var(--danger);
      border: 1px solid var(--danger);
      &:enabled:hover {
        background: var(--danger-hover);
      }
      &-hover {
        background: var(--danger-hover);
      }
    }
  }
}

</style>
