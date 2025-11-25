<script setup>
  import {ref} from 'vue'
  import Tabs from '@/components/Tabs.vue'

  const tabs = [
    {name: 'About', label: 'About'},
    {name: 'Help', label: 'Help'},
    {name: 'FAQ', label: 'FAQ'},
  ]
  const selectedTab = ref('About')

  const changeTab = (tabName) => {
    selectedTab.value = tabName
  }
</script>

<template>
  <Tabs
    :names="tabs"
    :selectedTab="selectedTab"
    @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      Here you can display information about your website and contact details.
    </div>
    <div v-if="selectedTab === 'Help'">
      Help section for navigating the website and contact information.
    </div>
    <div v-if="selectedTab === 'FAQ'">
      You can leave your question here and also see frequently asked questions and their answers.
    </div>
  </Tabs>
</template>