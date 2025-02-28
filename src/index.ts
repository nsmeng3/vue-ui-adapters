import {App} from 'vue';
import VuaModal from './components/VuaModal.vue';
import VuaButton from './components/VuaButton.vue';

import {getAdapter} from '~shared/adapter-utils';

const globalConfig = {
  defaultAdapter: 'element',
};

function setConfig(options: { defaultAdapter?: string } = {}) {
  console.log('setConfig called with:', options);
  if (options.defaultAdapter) {
    globalConfig.defaultAdapter = options.defaultAdapter;
  }
}

export { VuaModal, VuaButton, getAdapter, setConfig};

export default {
  install(app: App, options: { defaultAdapter?: string } = {}) {
    console.log('Installing VueUIAdapters with options:', options);
    if (options.defaultAdapter) {
      globalConfig.defaultAdapter = options.defaultAdapter;
    }
    app.component('VuaModal', VuaModal);
    app.component('VuaButton', VuaButton);
    app.provide('vuaConfig', globalConfig);
  },
};
