import storyUserItem from './storyUserItem.vue'
import { avatar } from '../avatar/avatar.vue'

export default {
  title: 'storyUserItem',
  component: {
    storyUserItem
  },
  subcomponents: {
    avatar
  },
  argsTypes: {
    avatar: {
      type: 'text'
    },
    username: {
      type: 'text'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    storyUserItem,
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: `
  <storyUserItem :avatar='args.avatar' :username='args.username'></storyUserItem>
  `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/100/100',
  username: 'Join'
}
