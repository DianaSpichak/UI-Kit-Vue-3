<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)

const handleConfirm = () => {
  alert('The action is completed!')
}

const handleCancel = () => {
  console.log('Action cancelled')
}
</script>

<template>
  <div>
    <button @click="showModal = true" class="btn btn-danger">
      Perform a dangerous action?
    </button>

    <Modal
      v-model="showModal"
      title="Attention!"
      message="This action cannot be undone. Are you sure you want to continue?"
      confirm-text="Yes"
      cancel-text="No"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
</template>