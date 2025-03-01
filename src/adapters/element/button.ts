// src/adapters/element/button.ts
import { h, type VNode } from 'vue';
import { ElButton } from 'element-plus';
import { type ButtonAdapter, type ButtonAdapterProps } from '../types';

export class ElementButtonAdapter implements ButtonAdapter {
  render({ type = 'default', disabled = false, size = 'default', onClick, content }: ButtonAdapterProps): VNode {
    // 参数映射
    const mappedType = type === 'secondary' ? 'default' : type === 'dashed' ? 'default' : type;
    const mappedSize = size === 'middle' ? 'default' : size;
    return h(
      ElButton,
      {
        type: mappedType as 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default',
        disabled,
        size: mappedSize as 'large' | 'small' | 'default',
        onClick
      },
      typeof content === 'function' ? content() : content
    );
  }
}
