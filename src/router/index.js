import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Button from '@/views/Button.vue'
import Typography from '@/views/Typography.vue'
import Checkbox from '@/views/Checkbox.vue'
import Radiobutton from '@/views/Radiobutton.vue'
import Progress from '@/views/Progress.vue'
import Input from '@/views/Input.vue'
import Tabs from '@/views/Tabs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { title: 'MAIN PAGE' }
    },
    {
      path: '/button',
      name: 'Buttons',
      component: Button,
      meta: { title: 'BUTTONS' }
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography,
      meta: { title: 'TYPOGRAPHY' }
    },
    {
      path: '/checkbox',
      name: 'Checkboxes',
      component: Checkbox,
      meta: { title: 'CHECKBOXES' }
    },
    {
      path: '/radiobutton',
      name: 'Radiobuttons',
      component: Radiobutton,
      meta: { title: 'RADIOBUTTONS' }
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress,
      meta: { title: 'PROGRESS' }
    },
    {
      path: '/input',
      name: 'Input',
      component: Input,
      meta: { title: 'INPUTS' }
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,
      meta: { title: 'TABS' }
    }
  ]
})

export default router;