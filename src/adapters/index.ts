// src/adapters/index.ts
import { type VNode } from 'vue';
import { modalAdapter as elementPlusModalAdapter } from './element-plus/modal';
import { modalAdapter as antdvModalAdapter } from './antdv/modal';
import { buttonAdapter as elementPlusButtonAdapter } from './element-plus/button';
import { buttonAdapter as antdvButtonAdapter } from './antdv/button';
import { getAdapter, AdapterTypes, type AdapterType  } from '~shared/adapter-utils';

interface ModalAdapter {
    renderModal: (options: {
        visible: boolean;
        title: string;
        content: string | (() => any);
        onClose: () => void;
        onOk: () => void;
    }) => VNode;
}

interface ButtonAdapter {
    renderButton: (options: {
        type?: any;
        disabled?: boolean;
        onClick?: () => void;
        content: string | (() => any);
    }) => VNode;
}
const modalAdapterMap: Record<AdapterType | string, ModalAdapter> = {
    [AdapterTypes.ELEMENT]: elementPlusModalAdapter,
    [AdapterTypes.ANTDV]: antdvModalAdapter,
};

const buttonAdapterMap: Record<AdapterType | string, ButtonAdapter> = {
    [AdapterTypes.ELEMENT]: elementPlusButtonAdapter,
    [AdapterTypes.ANTDV]: antdvButtonAdapter,
};

export function getModalAdapter(type?: AdapterType | string): ModalAdapter {
    return getAdapter(type, modalAdapterMap);
}

export function getButtonAdapter(type?: AdapterType | string): ButtonAdapter {
    return getAdapter(type, buttonAdapterMap);
}

export { modalAdapterMap, buttonAdapterMap, AdapterTypes };
