// src/adapters/antdv/modal.d.ts
import { type VNode } from 'vue';

export declare const modalAdapter: {
  renderModal: (options: {
    visible: boolean;
    title: string;
    content: string | (() => any);
    onClose: () => void;
    onOk: () => void;
  }) => VNode;
};
