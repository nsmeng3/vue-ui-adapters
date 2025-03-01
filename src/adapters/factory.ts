// src/adapters/factory.ts
import { type ButtonAdapter, type ModalAdapter } from './types';
import { ElementButtonAdapter } from './element/button';
import { AntdvButtonAdapter } from './antdv/button';
import { ElementModalAdapter } from './element/modal';
import { AntdvModalAdapter } from './antdv/modal';
import { AdapterTypes } from './adapter-types';

// 按钮适配器工厂
const buttonAdapters: Record<string, new () => ButtonAdapter> = {
  [AdapterTypes.ELEMENT]: ElementButtonAdapter,
  [AdapterTypes.ANTDV]: AntdvButtonAdapter,
};

export function createButtonAdapter(type: string): ButtonAdapter {
  const AdapterClass = buttonAdapters[type] || buttonAdapters[AdapterTypes.ELEMENT];
  return new AdapterClass();
}

// 模态框适配器工厂
const modalAdapters: Record<string, new () => ModalAdapter> = {
  [AdapterTypes.ELEMENT]: ElementModalAdapter,
  [AdapterTypes.ANTDV]: AntdvModalAdapter,
};

export function createModalAdapter(type: string): ModalAdapter {
  const AdapterClass = modalAdapters[type] || modalAdapters[AdapterTypes.ELEMENT];
  return new AdapterClass();
}
