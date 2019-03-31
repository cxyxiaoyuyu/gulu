const expect = chai.expect;
 import Vue from 'vue'
 import Button from '../src/button'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Button', () => {
     it('Button存在.', () => {
         expect(Button).to.be.ok
     })
     it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                iconName: 'setting'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
        vm.$destroy()
    })
})