// src/adapters/antdv/button.ts
import { h, type VNode } from 'vue';
import { Button } from 'ant-design-vue';
import {ButtonType} from "ant-design-vue/es/button";

export const adapter = {
  renderButton({ type, disabled, onClick, content }: {
    type?: ButtonType;
    disabled?: any;
    onClick?: () => void;
    content: string | (() => any);
  }): VNode {
    return h(
      Button,
      { type: type || 'default', disabled, onClick },
      typeof content === 'function' ? content() : content
    );
  },
};
