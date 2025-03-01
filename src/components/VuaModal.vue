<!-- src/components/VuaModal.vue -->
<template>
  <component :is="renderModal()" />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { AdapterTypes, type AdapterType } from '@/adapters/adapter-types';
import { createModalAdapter } from '@/adapters/factory';
import { type ModalAdapterProps } from '@/adapters/types';

const props = defineProps<{
  visible?: boolean;
  title?: string;
  content?: string | (() => any);
  adapter?: AdapterType | string;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();

const vuaConfig = inject<{ defaultAdapter: AdapterType | string }>('vuaConfig', {
  defaultAdapter: AdapterTypes.ELEMENT,
});
const resolvedAdapter = props.adapter ?? vuaConfig.defaultAdapter;

const modalAdapter = createModalAdapter(resolvedAdapter);

function close() {
  emit('update:visible', false);
  emit('cancel');
}

function confirm() {
  emit('ok');
  close();
}

function renderModal() {
  const { visible = false, title = '', content = '' } = props;
  return modalAdapter.render({
    visible,
    title,
    content: content || (() => slots.default?.({})),
    onClose: close,
    onOk: confirm,
  } as ModalAdapterProps);
}

const slots = defineSlots<{
  default?(props: {}): any;
}>();
</script>
