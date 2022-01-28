import user from './user.vue'
import avatar from '../avatar/avatar.vue'

export default {
  title: 'user',
  component: {
    user
  },
  subcomponents: {
    avatar
  },
  argTypes: {
    avatar: {
      type: 'text'
    },
    userName: {
      type: 'text'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    user,
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: `
  <user :avatar="args.avatar"  :userName="args.userName" />
  `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/100/100',
  userName: 'John'
}
