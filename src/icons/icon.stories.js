import icon from './icon.vue'
import * as icons from './variants'

export default {
  title: 'icon',
  component: {
    icon
  },
  argTypes: {
    name: {
      control: {
        type: 'select'
      },
      options: Object.keys({ ...icons })
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    icon
  },
  data () {
    return {
      args
    }
  },
  template: `
  <icon :name='args.name' width="55px" />
  `
})

export const Default = template.bind(template)

Default.args = {
  name: 'home'
}
