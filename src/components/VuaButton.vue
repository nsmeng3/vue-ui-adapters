<!-- src/components/VuaButton.vue -->
<template>
  <component :is="renderButton()" />
</template>

<script setup lang="ts">
import { inject, type App } from 'vue';
import { AdapterTypes, type AdapterType } from '@/adapters/adapter-types';
import { getAdapter } from '@/shared/adapter-utils';
import * as elementPlusAdapter from '@/adapters/element/button';
import * as antdvAdapter from '@/adapters/antdv/button';
import VuaButton from "@/components/VuaButton.vue";

const buttonAdapterMap = {
  [AdapterTypes.ELEMENT]: elementPlusAdapter.adapter,
  [AdapterTypes.ANTDV]: antdvAdapter.adapter,
};

const props = defineProps<{
  type?: any;
  disabled?: boolean;
  adapter?: AdapterType | string;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const vuaConfig = inject<{ defaultAdapter: AdapterType | string }>('vuaConfig', {
  defaultAdapter: AdapterTypes.ELEMENT,
});
const resolvedAdapter = props.adapter ?? vuaConfig.defaultAdapter;

function handleClick() {
  emit('click');
}

function renderButton() {
  const { type, disabled } = props;
  const buttonAdapter = getAdapter(resolvedAdapter, buttonAdapterMap);
  return buttonAdapter.renderButton({
    type,
    disabled,
    onClick: handleClick,
    content: () => slots.default?.({}) || 'Button',
  });
}

const slots = defineSlots<{
  default?(props: {}): any;
}>();

</script>
