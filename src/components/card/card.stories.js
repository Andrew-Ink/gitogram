import card from '../card/card.vue'
import stats from '../stats/stats.vue'

export default {
  title: 'card',
  component: {
    card
  },
  subcomponent: {
    stats
  },
  argTypes: {
    title: {
      type: 'text'
    },
    subtitleDesc: {
      type: 'text'
    },
    desc: {
      type: 'text'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    card,
    stats
  },
  data () {
    return {
      args
    }
  },
  template: `
  <card :title='args.title' :subtitleDesc='args.subtitleDesc' :desc='args.desc' />
  `
})

export const Default = template.bind(template)

Default.args = {
  title: 'Vue.js',
  subtitleDesc: 'JavaScript',
  desc: ' framework for building interactive web applications ⚡'
}
