<!-- src/components/VuaModal.vue -->
<template>
  <component :is="renderComponent()"/>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import {AdapterTypes, getModalAdapter} from '@/adapters'
import type {AdapterType} from "~shared/adapter-utils";

const props = defineProps<{
  visible?: boolean;
  title?: string;
  content?: string | (() => any);
  adapter?: string;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();

const vuaConfig = inject<{ defaultAdapter: AdapterType | string }>('vuaConfig', {
  defaultAdapter: AdapterTypes.DEFAULT,
});
const resolvedAdapter = props.adapter ?? vuaConfig.defaultAdapter;

function close() {
  emit('update:visible', false);
  emit('cancel');
}

function confirm() {
  emit('ok');
  close();
}

function renderComponent() {
  const {visible = false, title = '', content = ''} = props;
  const modalAdapter = getModalAdapter(resolvedAdapter);
  return modalAdapter.renderModal({
    visible,
    title,
    content,
    onClose: close,
    onOk: confirm,
  });
}
</script>
