// src/adapters/factory.ts
import { type ButtonAdapter, type ModalAdapter, InputAdapter } from './types';
import { ElementButtonAdapter } from './element/button';
import { AntdvButtonAdapter } from './antdv/button';
import { ElementModalAdapter } from './element/modal';
import { AntdvModalAdapter } from './antdv/modal';
import { ElementInputAdapter } from './element/input';
import { AntdvInputAdapter } from './antdv/input';
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

// 输入框适配器工厂
const inputAdapters: Record<string, new () => InputAdapter> = {
  [AdapterTypes.ELEMENT]: ElementInputAdapter,
  [AdapterTypes.ANTDV]: AntdvInputAdapter,
};

export function createInputAdapter(type: string): InputAdapter {
  const AdapterClass = inputAdapters[type] || inputAdapters[AdapterTypes.ELEMENT];
  return new AdapterClass();
}
