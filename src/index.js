import Button from '@/views/Button.vue'
import Checkbox from '@/views/Checkbox.vue'
import Input from '@/views/Input.vue'
import Modal from '@/views/Modal.vue'
import Progress from '@/views/Progress.vue'
import Radiobutton from '@/views/Radiobutton.vue'
import Tabs from '@/views/Tabs.vue'
import Typography from '@/views/Typography.vue'

import '@/styles/global.scss'

export {
  Button,
  Checkbox,
  Input,
  Modal,
  Progress,
  Radiobutton,
  Tabs,
  Typography
}

const UIKitVue3 = {
  install(app) {
    app.component('UIKitButton', Button)
    app.component('UIKitCheckbox', Checkbox)
    app.component('UIKitInput', Input)
    app.component('UIKitModal', Modal)
    app.component('UIKitProgress', Progress)
    app.component('UIKitRadiobutton', Radiobutton)
    app.component('UIKitTabs', Tabs)
    app.component('UIKitTypography', Typography)
  }
}

export default UIKitVue3