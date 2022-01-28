import progres from './progres.vue'

export default {
  title: 'progres',
  component: {
    progres
  },
  argTypes: {
    onFinish: {
      action: 'onFinish'
    }
  }
}

const template = (args) => ({
  components: {
    progres
  },
  data () {
    return { args }
  },
  template: `
  <progres @onFinish="args.onFinish" />
  `
})

export const Default = template.bind(template)
