import button from './button.vue'

export default {
  title: 'button',
  component: {
    button
  }
}

const template = () => ({
  components: {
    xButton: button
  },
  template: `
    <x-button hover-text="Unfollow">Follow</x-button>
  `
})

export const Default = template.bind({})
