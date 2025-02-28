<template>
  <component :is="renderComponent()"/>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import {getButtonAdapter} from '@/adapters';
import {type AdapterType, AdapterTypes} from '~shared/adapter-utils';

const props = defineProps<{
  type?: string;        // 按钮类型（如 primary、default）
  disabled?: boolean;   // 是否禁用
  adapter?: AdapterType | string; // 适配器类型
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const vuaConfig = inject<{ defaultAdapter: AdapterType | string }>('vuaConfig', {
  defaultAdapter: AdapterTypes.DEFAULT,
});
const resolvedAdapter = props.adapter ?? vuaConfig.defaultAdapter;

function handleClick() {
  emit('click');
}

function renderComponent() {
  const {type, disabled} = props;
  const buttonAdapter = getButtonAdapter(resolvedAdapter);
  return buttonAdapter.renderButton({
    type,
    disabled,
    onClick: handleClick,
    content: () => slots.default?.({}) || 'Button', // 使用插槽内容或默认文本
  });
}

const slots = defineSlots<{
  default?(props: {}): any;
}>();
</script>
