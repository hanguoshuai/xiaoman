// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.config.productionTip = false

require('./styles/app.scss')

import Vue from 'vue'
/* eslint-disable no-new */
import index from './scripts/components/index.vue'
new Vue({
  el:"#app",
 components:{
   index:index
 }
})