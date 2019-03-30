import Vue from 'vue'
import Button from './button'
import Icon from './icon'

console.log(Button)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el: '#app'
})
