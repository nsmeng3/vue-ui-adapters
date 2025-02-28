<!-- src/components/VuaModal.vue -->
<template>
  <component :is="renderModal()" />
</template>

<script setup lang="ts">
import { inject, type App } from 'vue';
import { AdapterTypes, type AdapterType } from '@/adapters/adapter-types';
import { getAdapter } from '@/shared/adapter-utils';
import * as elementPlusAdapter from '@/adapters/element/modal';
import * as antdvAdapter from '@/adapters/antdv/modal';
import VuaModal from "@/components/VuaModal.vue";

const modalAdapterMap = {
  [AdapterTypes.ELEMENT]: elementPlusAdapter.adapter,
  [AdapterTypes.ANTDV]: antdvAdapter.adapter,
};

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
  const modalAdapter = getAdapter(resolvedAdapter, modalAdapterMap);
  return modalAdapter.renderModal({
    visible,
    title,
    content: content || (() => slots.default?.({})),
    onClose: close,
    onOk: confirm,
  });
}

const slots = defineSlots<{
  default?(props: {}): any;
}>();

</script>
