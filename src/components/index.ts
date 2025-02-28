import { type App } from 'vue';
import VuaModal from './VuaModal.vue';
import VuaButton from './VuaButton.vue';
import { registerComponent } from '@/shared/adapter-utils';

// 定义组件列表
const componentList = [
  { name: 'VuaModal', component: VuaModal },
  { name: 'VuaButton', component: VuaButton },
];

// 注册函数
export function registerComponents(app: App) {
  componentList.forEach(({ name, component }) => {
    registerComponent(app, name, component);
  });
}

// 导出组件（可选）
export { VuaModal, VuaButton };
