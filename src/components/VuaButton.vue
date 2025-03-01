<!-- src/components/VuaButton.vue -->
<template>
  <component :is="renderButton()" />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { AdapterTypes, type AdapterType } from '@/adapters/adapter-types';
import { createButtonAdapter } from '@/adapters/factory';
import { type ButtonAdapterProps } from '@/adapters/types';

const props = defineProps<{
  type?: string;
  disabled?: boolean;
  size?: string;
  adapter?: AdapterType | string;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const vuaConfig = inject<{ defaultAdapter: AdapterType | string }>('vuaConfig', {
  defaultAdapter: AdapterTypes.DEFAULT,
});
const resolvedAdapter = props.adapter ?? vuaConfig.defaultAdapter;

const buttonAdapter = createButtonAdapter(resolvedAdapter);

function handleClick() {
  emit('click');
}

function renderButton() {
  const { type, disabled, size } = props;
  return buttonAdapter.render({
    type,
    disabled,
    size,
    onClick: handleClick,
    content: () => slots.default?.({}) || 'Button',
  } as ButtonAdapterProps);
}

const slots = defineSlots<{
  default?(props: {}): any;
}>();
</script>
