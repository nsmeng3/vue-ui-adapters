<!-- src/components/VuaInput.vue -->
<template>
  <component :is="renderInput()" v-model="internalValue" />
</template>

<script lang="ts">
import {defineComponent, ref, watch, inject} from 'vue';
import {AdapterTypes} from '@/adapters/adapter-types';
import {createInputAdapter} from '@/adapters/factory';
import {type InputAdapterProps} from '@/adapters/types';

export default defineComponent({
  name: 'VuaInput',
  props: {
    modelValue: String,          // 支持 v-model
    placeholder: String,
    disabled: Boolean,
    size: String,
    adapter: String,
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit }) {
    const vuaConfig = inject<{ defaultAdapter: string }>('vuaConfig', {
      defaultAdapter: AdapterTypes.ELEMENT,
    });
    const resolvedAdapter = props.adapter ?? vuaConfig.defaultAdapter;
    const inputAdapter = createInputAdapter(resolvedAdapter);

    const internalValue = ref(props.modelValue || '');

    // 同步外部 v-model
    watch(() => props.modelValue, (newValue) => {
      internalValue.value = newValue || '';
    });

    // 处理输入事件
    function handleInput(value: string) {
      internalValue.value = value;
      console.log('input:', value);
      emit('update:modelValue', value);
      emit('input', value);
    }

    // 处理变化事件
    function handleChange(value: string) {
      console.log('change:', value);
      emit('change', value);
    }

    function render() {
      const { placeholder, disabled, size } = props;
      return inputAdapter.render({
        value: internalValue.value,
        placeholder,
        disabled,
        size,
        onInput: handleInput,
        onChange: handleChange,
      } as InputAdapterProps);
    }

    return { internalValue, renderInput: render };
  },
});

</script>
