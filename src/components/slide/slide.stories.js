import slide from './slide.vue'
import user from '../user/user.vue'
import progres from '../progres/progres.vue'
import xbutton from '../button/button.vue'

export default {
  title: 'slide',
  component: {
    slide
  },
  subcomponents: {
    user,
    progres,
    xbutton
  },
  argTypes: {
    hoverText: {
      type: 'string'
    },
    buttonText: {
      type: 'string'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    slide,
    user,
    progres,
    xbutton
  },
  data () {
    return {
      args
    }
  },
  template: `
    <slide :hoverText='args.hoverText' :buttonText='args.buttonText' />
  `
})

export const Default = template.bind(template)

Default.args = {
  hoverText: 'Unfollow',
  buttonText: 'Follow'
}
