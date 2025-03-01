// src/adapters/types.ts
import { type VNode } from 'vue';

// 通用适配器接口
export interface UIAdapter<T> {
  render: (props: T) => VNode;
}

// 按钮适配器参数和接口
export interface ButtonAdapterProps {
  type?: string;
  disabled?: boolean;
  size?: string;
  onClick?: () => void;
  content?: string | (() => any);
}

export interface ButtonAdapter extends UIAdapter<ButtonAdapterProps> {
  render: (props: ButtonAdapterProps) => VNode;
}

// 模态框适配器参数和接口
export interface ModalAdapterProps {
  visible: boolean;
  title: string;
  content?: string | (() => any);
  onClose: () => void;
  onOk?: () => void;
}

export interface ModalAdapter extends UIAdapter<ModalAdapterProps> {
  render: (props: ModalAdapterProps) => VNode;
}
