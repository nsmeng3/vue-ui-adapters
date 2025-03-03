import { type App } from 'vue';
import VuaModal from './VuaModal.vue';
import VuaButton from './VuaButton.vue';
import VuaInput from './VuaInput.vue';
import { registerComponent } from '@/shared/adapter-utils';

// 定义组件列表
const componentList = [
  { name: 'VuaModal', component: VuaModal },
  { name: 'VuaButton', component: VuaButton },
  { name: 'VuaInput', component: VuaInput },
];

// 注册函数
export function registerComponents(app: App) {
  componentList.forEach(({ name, component }) => {
    registerComponent(app, name, component);
  });
}

export { VuaModal, VuaButton };
