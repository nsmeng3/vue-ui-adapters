import { Modal, Button } from 'ant-design-vue';
import { h } from 'vue';

export const modalAdapter = {
    renderModal({ visible, title, content, onClose, onOk }) {
        return h(
            Modal,
            {
                visible,
                title,
                onCancel: onClose,
                footer: [
                    h(Button, { key: 'cancel', onClick: onClose }, () => '取消'),
                    onOk &&
                    h(Button, { key: 'ok', type: 'primary', onClick: onOk }, () => '确认'),
                ].filter(Boolean),
            },
            {
                default: () => (typeof content === 'function' ? content() : content),
            }
        );
    },
};
