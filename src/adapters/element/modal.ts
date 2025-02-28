// src/adapters/element/modal.ts
import { h, type VNode } from 'vue';
import { ElDialog, ElButton } from 'element-plus';

export const adapter = {
  renderModal({ visible, title, content, onClose, onOk }: {
    visible: boolean;
    title: string;
    content: string | (() => any);
    onClose: () => void;
    onOk: () => void;
  }): VNode {
    return h(
      ElDialog,
      { modelValue: visible, title, onClose },
      {
        default: () => (typeof content === 'function' ? content() : content),
        footer: () =>
          h('div', [
            h(ElButton, { onClick: onClose }, () => '取消'),
            onOk && h(ElButton, { type: 'primary', onClick: onOk }, () => '确认'),
          ]),
      }
    );
  },
};
