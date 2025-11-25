<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const nameField = ref('')
const emailField = ref('')
const confirmationCodeField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Minimum length: 3 characters`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('You entered an incorrect email address', email)
  },
  confirmationCodeField: {
    maxLength: helpers.withMessage(`Maximum length: 6 characters`, maxLength(6)),
    numeric: helpers.withMessage('You can only enter numbers', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Passwords don't match`, sameAs(passwordField.value))
  }
}))

const v = useVuelidate(rules, {nameField, emailField, confirmationCodeField, confirmPasswordField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) 
    return alert('Form submitted')
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"/>
      
    <Input
      label="Your confirmation code"
      name="code"
      placeholder="Input your confirmation code"
      v-model:value="v.confirmationCodeField.$model"
      :error="v.confirmationCodeField.$errors"/>
      
    <Input
      label="Your password"
      name="password"
      placeholder="Please input password"
      v-model:value="passwordField"
      type="password"/>
      
    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"/>

    <Button label="Submit" color="primary"></Button>
  </form>
</template>