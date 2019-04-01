import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'

console.log(Button)
Vue.component('g-button',Button)
//Vue.component('g-icon',Icon)
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

// Unit Test
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
        iconName: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'setting',
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'setting'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('0')
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings',
        iconPosition: 'icon-right'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('0')
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'setting',
      }
    })
    vm.$mount()
    let spy = chai.spy(function(){})

    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
