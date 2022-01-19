<template>
  <div class="card">
    <h2 class="card__title">Vue.js</h2>
    <div class="card__description">
      <span class="card__feature">JavaScript</span> framework for building interactive web applications ⚡
    </div>
    <stats :stars="235" :forks="4" />
  </div>
</template>

<script>
import stats from '../stats/stats.vue'
export default {
  name: 'card',
  components: {
    stats
  }
}
</script>

<style lang="scss" src="./card.scss" scoped></style>
