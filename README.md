# Vue 3 + Vite

This UI-Kit is based on Vue 3 and includes buttons, typography, checkboxes, radio buttons, progress bars, input fields, and tabs. 
UI-Kit is developed using Vue 3 in Vite.
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 1.Installation
```bash
npm install uikit-vue3
# or
yarn add uikit-vue3
# or
pnpm add uikit-vue3
```

## 2.Configure in your project
You can connect the library in two ways:

### Option A: Global registration (all components at once):
```
/ main.js
import { createApp } from 'vue'
import App from './App.vue'
import UIKitVue3 from 'uikit-vue3'
import 'uikit-vue3/style.css'

const app = createApp(App)
app.use(UIKitVue3)
app.mount('#app')
```

After that, you can use the components anywhere in your application:
```
<template>
  <Button>Click</Button>
  <Input placeholder="Введите текст" />
</template>
```

### Option B: Local registration (import of individual components):
```
<script setup>
import { Button } from 'uikit-vue3'
import 'uikit-vue3/style.css'
</script>

<template>
  <Button>Click</Button>
</template>

```

## 3.Components

### Buttons (Button)
Supports various types

States: disabled, rounded, outlined, icon, event

```<Button type="primary">Сохранить</Button>```

### Inputs (Input)
Supports v-model.

States: error

```
<Input
  label="Your email"
  name="email"
  placeholder="Input your email"
  v-model:value="v.emailField.$model"
  :error="v.emailField.$errors"
/>
```


### Checkboxes (Checkbox)
Supports v-model.

States: active, disabled, group, switch

```
<checkbox
  label="Checkbox Disabled"
  id="checkboxDisabled"
  name="checkboxDisabled"
  value="I like it"
  :disabled="checkboxDisabled"
  v-model:checked="checkboxDisabledChecked"
/>
```

### Radio buttons (Radiobutton)
Radio button grouping.
Supports v-model.

```
<radiobutton
  :value="option.name"
  :label="option.name"
  :id="option.id"
  name="option"
  v-model:checkedValue="selectedOption"
/>
```

### Progress bar (ProgressBar, ProgressCircle)
Linear and circular progress bars with static and dynamic color changes.

```<ProgressBar maxWidth="400px" :percent="percentBar" color="primary" :dynamic-color="false"/>```
```<ProgressBar maxWidth="400px" :percent="dynamicPercentBar" :dynamic-color="true"/```
```<ProgressCircle :percent="percentCircle" :dynamic-color="false"/>```
```<ProgressCircle :percent="dynamicPercentCircle" :dynamic-color="true"```


### Tabs (Tabs)

```
<Tabs
  :names="tabs"
  :selectedTab="selectedTab"
  @changeTab="changeTab">
  <div v-if="selectedTab === 'FAQ'">
    You can leave your question here and also see frequently asked questions and their answers.
  </div>
</Tabs>
```

### Modal window (Modal)
Supports v-model.

```
<Modal
  v-model="showModal"
  title="Attention!"
  message="This action cannot be undone. Are you sure you want to continue?"
  confirm-text="Yes"
  cancel-text="No"
  @confirm="handleConfirm"
  @cancel="handleCancel"
/>
```

### Typography (Typography)
Headlines of different levels.

```
<template>
  <h1 class="heading-1">Heading 1</h1>
  <h2 class="heading-2">Heading 2</h2>
  <h3 class="heading-3">Heading 3</h3>
  <h4 class="heading-4">Heading 4</h4>
  <h5 class="heading-5">Heading 5</h5>
  <h6 class="heading-6">Heading 6</h6>
</template>
```

### Color Palette (ColorPalette)
The palette of colors used in the UI Kit.
```
<ColorPalette 
  v-for="item in colorItems"
  :key="item.variable"
  :label="item.label"
  :color="item.variable"
  :hexcode="getCssVariable(item.variable)"
  disabled
/>
```

## 4.Customization
The library uses CSS variables for styles. To override them, simply declare your own values in the root element of your application.

```
:root {
  --primary: #5e6ed1;
  --primary-hover: #A5AFFB;
  --second: #3478fa;
  --second-hover: #6d9df9;
  --success: #24ca9a;
  --success-hover: #6decc8;
  --info: #46aaff;
  --info-hover: #9acefb;
  --warning: #e77a3a;
  --warning-hover: #ffac7b;
  --danger: #c11732;
  --danger-hover: #d16071;

  --font-size-h1: 3rem;     
  --font-size-h2: 2.25rem;
  --font-size-h3: 1.875rem;
  --font-size-h4: 1.5rem;
  --font-size-h5: 1.25rem;
  --font-size-h6: 1.125rem;
}
```