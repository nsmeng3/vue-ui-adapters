import { App, type Plugin } from 'vue';
import { registerComponents } from './components';
import { AdapterType, AdapterTypes} from './adapters/adapter-types';

const globalConfig = {
  defaultAdapter: 'element' as AdapterType,
};

const VueUIAdapters: Plugin = {
  install(app: App, options: { defaultAdapter?: string } = {}) {
    console.log('Installing VueUIAdapters with options:', options);
    if (options.defaultAdapter) {
      globalConfig.defaultAdapter = options.defaultAdapter as AdapterType;
    }
    registerComponents(app); // 注册所有组件
    app.provide('vuaConfig', globalConfig);
  },
};
export default VueUIAdapters;
