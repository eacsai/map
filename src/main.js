import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map';
import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.add = function (list) {
  // Module.onRuntimeInitialized = function() {
  //   console.log(Module._free);
  // }
  function transferToHeap(arr) {
    const floatArray = toFloatArr(arr);
    heapSpace = Module._malloc(floatArray.length *
      floatArray.BYTES_PER_ELEMENT); // 1
    Module.HEAPF32.set(floatArray, heapSpace >> 2); // 2 
    return heapSpace;

    function toFloatArr(arr) {
      const res = new Float32Array(arr.length); // 3 
      for (let i = 0; i < arr.length; i++)
        res[i] = arr[i];
      return res;
    }
  }

  function sumUp(arr) {
    let arrayOnHeap; // 4.
    try {
      arrayOnHeap = transferToHeap(arr);
      return Module._sum_up(arrayOnHeap, arr.length);
    } finally {
      Module._free(arrayOnHeap); // 5.
    }
  }  
  alert(sumUp(list))
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  url: ''
})