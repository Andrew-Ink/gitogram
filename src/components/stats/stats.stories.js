import stats from './stats.vue'

export default {
  title: 'stats',
  component: {
    stats
  },
  argsTypes: {
    stars: {
      type: 'number'
    },
    forks: {
      type: 'number'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    stats
  },
  data () {
    return {
      args
    }
  },
  template: `
  <stats :stars='args.stars' :forks='args.forks' />
  `
})

export const Default = template.bind(template)

Default.args = {
  stars: '321',
  forks: '25'
}
