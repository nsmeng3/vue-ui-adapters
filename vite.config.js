import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~shared': path.resolve(__dirname, 'src/shared'), // 与 tsconfig.json 同步
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'VueUIAdapters',
            fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'element-plus', 'ant-design-vue'],
            output: {
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                    'ant-design-vue': 'AntDesignVue',
                },
                exports: 'named', // 强制只使用命名导出
            },
        },
        outDir: 'dist',
    },
});
