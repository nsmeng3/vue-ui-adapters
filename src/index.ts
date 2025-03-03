import {App, type Plugin} from 'vue';
import {registerComponents} from './components';
import {AdapterType} from './adapters/adapter-types';

const globalConfig = {
  defaultAdapter: 'element' as AdapterType,
};

const VueUIAdapters: Plugin = {
  install(app: App, options: { defaultAdapter?: AdapterType } = {}) {
    console.log('Installing VueUIAdapters with options:', options);
    if (options.defaultAdapter) {
      globalConfig.defaultAdapter = options.defaultAdapter as AdapterType;
    }
    registerComponents(app); // 注册所有组件
    // app.component("VuaButton", VuaButton);
    // app.component("VuaModal", VuaModal);
    console.log('components registered');
    app.provide('vuaConfig', globalConfig);
  },
};
export * from "./components";
export default VueUIAdapters;
