<template>
  <div class="card">
    <h2 class="card__title">{{title}}</h2>
    <div class="card__description">
      <span class="card__feature">{{subtitleDesc}}</span>{{desc}}</div>
    <stats :stars="235" :forks="4" />
  </div>
</template>

<script>
import stats from '../stats/stats.vue'
export default {
  name: 'card',
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Vue.js'
    },
    subtitleDesc: {
      type: String,
      required: true,
      default: 'JavaScript'
    },
    desc: {
      type: String,
      required: true,
      default: ' framework for building interactive web applications ⚡'
    }
  }
}
</script>

<style lang="scss" src="./card.scss" scoped></style>
