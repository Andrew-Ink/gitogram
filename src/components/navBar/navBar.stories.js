import navBar from './navBar.vue'
import { avatar } from '../avatar/avatar.vue'
import { icon } from '../../icons/icon.vue'

export default {
  title: 'navBar',
  component: {
    navBar
  },
  subcomponents: {
    avatar,
    icon
  }
}

const template = () => ({
  components: {
    navBar
  },
  template: `
  <navBar /> 
  `
})

export const Default = template.bind(template)
