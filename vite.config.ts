import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp';
import { terser } from "rollup-plugin-terser";
import path from 'path';
// https://vitejs.dev/config/
const plugins=[reactRefresh(),
  vitePluginImp({
  libList: [
    {
      libName: 'antd',
      style: (name) => `antd/es/${name}/style`,
    },
  ],
})];
 //生产环境配置打包分析插件
if(process.env.NODE_ENV){
  // 开启智能压缩 删除console
  plugins.push(terser({ compress: { drop_console: true } }));
}

export default defineConfig({
  plugins,
  base:"./",//打包路径
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  server: {
    port:4000,//启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': 'https://xiaohuo.online',//代理网址
      //  '/api': {
      //   target: 'http://192.168.100.100:88',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
    },
    cors:true
  },
  build:{
    // target:"esnext",//
    brotliSize:false,
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
})
