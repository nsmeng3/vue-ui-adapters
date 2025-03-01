// src/adapters/antdv/button.ts
import { h, type VNode } from 'vue';
import { Button } from 'ant-design-vue';
import { type ButtonAdapter, type ButtonAdapterProps } from '../types';

export class AntdvButtonAdapter implements ButtonAdapter {
  render({ type = 'default', disabled = false, size = 'middle', onClick, content }: ButtonAdapterProps): VNode {
    // 参数映射
    const mappedType = type === 'secondary' ? 'dashed' : type === 'info' ? 'default' : type;
    const mappedSize = size === 'medium' ? 'middle' : size;
    return h(
      Button,
      {
        type: mappedType as 'primary' | 'default' | 'dashed' | 'text' | 'link',
        disabled,
        size: mappedSize as 'large' | 'middle' | 'small',
        onClick
      },
      typeof content === 'function' ? content() : content
    );
  }
}
