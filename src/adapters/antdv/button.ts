// src/adapters/antdv/button.ts
import { h, type VNode ,PropType} from 'vue';
import { Button } from 'ant-design-vue';
import {ButtonType} from "ant-design-vue/es/button";

export const buttonAdapter = {
  renderButton({ type, disabled, onClick, content }: {
    type?: ButtonType;
    disabled?: any;
    onClick?: () => void;
    content: any;
  }): VNode {
    return h(
      Button,
      {
        type: type,
        disabled,
        onClick,
      },
      content
    );
  },
};
