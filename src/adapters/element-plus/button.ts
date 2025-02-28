// src/adapters/element-plus/button.ts
import {h, type VNode} from 'vue';
import {ElButton} from 'element-plus';

export const buttonAdapter = {
  renderButton({type, disabled, onClick, content}: {
    type?:  "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger";
    disabled?: boolean;
    onClick?: () => void;
    content: any;
  }): VNode {
    return h(
      ElButton,
      {
        type: type,
        disabled,
        onClick,
      },
      content,
    );
  },
};
