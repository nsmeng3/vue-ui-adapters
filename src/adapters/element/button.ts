// src/adapters/element/button.ts
import {h, type VNode} from 'vue';
import {ElButton} from 'element-plus';

export const adapter = {
  renderButton({type, disabled, onClick, content}: {
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default';
    disabled?: any;
    onClick?: () => void;
    content: string | (() => any);
  }): VNode {
    return h(
      ElButton,
      {type: type, disabled, onClick},
      typeof content === 'function' ? content() : content
    );
  },
};
