import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$dispatch=function (eventName,data) {
    let parent=this.$parent
    while(parent){
        parent.$emit(eventName,data),
        parent=parent.$parent
    }
}
new Vue({
    render: h => h(App),
}).$mount('#app')
