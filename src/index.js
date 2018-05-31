import Vue from 'vue'
import App from './components/App.vue'
import store from './store'


window.app = new Vue({
  el: '#app',
  store,
  components:{
    App
  },
  template:'<App/>'
})
