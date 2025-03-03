import { h, type VNode } from 'vue';
import { ElInput } from 'element-plus';
import { type InputAdapter, type InputAdapterProps } from '../types';

export class ElementInputAdapter implements InputAdapter {
  render({ value = '', placeholder, disabled = false, size = 'default', onInput, onChange }: InputAdapterProps): VNode {
    return h(ElInput, {
      modelValue: value,
      placeholder,
      disabled,
      size,
      'onUpdate:modelValue': onInput,
      onChange,
    });
  }
}
