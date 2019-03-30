import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'


console.log(Button)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: true,
        loading4: true,
    }
})
