import { defineCustomElement } from 'vue'
import SbAuthVueComponent from './SbAuthVue.vue'

// Convert Vue component to custom element
const SbAuthVue = defineCustomElement(SbAuthVueComponent)

export const registerVueComponent = () => {
    customElements.define('sb-auth-vue', SbAuthVue)
}

export { SbAuthVue }
