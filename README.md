# @lazyegg/vue-ui-adapters

A Vue.js UI adapter library supporting Vue 2 and Vue 3.

## Branches
- `main`: Public base (docs, scripts, etc.)
- `vue2`: Vue 2 adapters (2.x series)
- `vue3`: Vue 3 adapters (3.x series)


## Installation
## Installation
- Vue 2: `npm install vue-ui-adapters@^2.0.0`
- Vue 3: `npm install vue-ui-adapters@^3.0.0`

## Usage

组件前缀统一使用VuaXxx，如VuaModal。

```vue
<template>
  <VuaModal v-model:visible="visible" title="提示" adapter="element" />
</template>

<script setup>
import { VuaModal } from '@lazyegg/vue-ui-adapters';
import { ref } from 'vue';

const visible = ref(false);
</script>
```

## Supported Adapters

- `element`: Element UI
- `antdv`: Ant Design Vue


## 版本计划

