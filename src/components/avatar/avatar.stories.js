import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: {
    avatar
  }
}

const template = () => ({
  components: {
    avatar
  },
  template: `
  <avatar></avatar>
  `
})

export const Default = template.bind({})
