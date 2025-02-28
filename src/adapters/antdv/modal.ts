// src/adapters/antdv/modal.ts
import { h, type VNode } from 'vue';
import { Modal, Button } from 'ant-design-vue';

export const adapter = {
  renderModal({ visible, title, content, onClose, onOk }: {
    visible: boolean;
    title: string;
    content: string | (() => any);
    onClose: () => void;
    onOk: () => void;
  }): VNode {
    return h(
      Modal,
      {
        visible,
        title,
        onCancel: onClose,
        footer: [
          h(Button, { key: 'cancel', onClick: onClose }, () => '取消'),
          onOk && h(Button, { key: 'ok', type: 'primary', onClick: onOk }, () => '确认'),
        ].filter(Boolean),
      },
      {
        default: () => (typeof content === 'function' ? content() : content),
      }
    );
  },
};
