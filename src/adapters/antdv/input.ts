import {h, type VNode} from 'vue';
import {Input} from 'ant-design-vue';
import {type InputAdapter, type InputAdapterProps} from '../types';

export class AntdvInputAdapter implements InputAdapter {
  render({ value = '', placeholder, disabled = false, size = 'default', onInput, onChange }: InputAdapterProps): VNode {
    const mappedSize = size === 'default' ? 'middle' : size;
    return h(Input, {
      value,
      placeholder,
      disabled,
      size: mappedSize,
      onInput: (e: Event) => onInput?.((e.target as HTMLInputElement).value), // 输入时更新
      onChange: (e: Event) => onChange?.((e.target as HTMLInputElement).value), // 值变化时触发
      onPress: (e: Event) => onChange?.((e.target as HTMLInputElement).value),
    });
  }
}
