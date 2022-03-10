/*
 * @Author: your name
 * @Date: 2022-03-10 19:09:35
 * @LastEditTime: 2022-03-10 19:47:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \X北辰北\webgismap\webgismap\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI); 
new Vue({
  render: h => h(App),
}).$mount('#app')
