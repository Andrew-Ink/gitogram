import topline from './topline.vue'
import logo from '../logo/logo.vue'
import avatar from '../avatar/avatar.vue'
import storyUserItem from '../storyUserItem/storyUserItem.vue'
import navBar from '../navBar/navBar.vue'

export default {
  title: 'topline',
  component: {
    topline
  },
  subcomponents: {
    avatar,
    storyUserItem,
    navBar,
    logo
  },
  argTypes: {
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
    topline,
    avatar,
    storyUserItem,
    navBar,
    logo
  },
  data () {
    return {
      args
    }
  },
  template: `

  <topline>
    <template #headline>
      <div div class="logo">
        <logo />
      </div>
    <navBar />
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories__item" v-for="n in 10" :key="n">
          <storyUserItem :avatar="args.avatar" :username="args.username" />
        </li>
      </ul>
    </template>
  </topline>
  `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/100/100',
  username: 'Join'
}
