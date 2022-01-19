<template>
  <div class="stats">
    <div class="stats__border stats__border--left stats__border--background-gray">
      <div class="stats__icon">
        <icon name="star" />
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border stats__border--background-gray">
      <div class="stats__icon">
        <icon name="fork" />
      </div>
      <span>Fork</span>
    </div>
    <div class="stats__border stats__border--right">
      {{ forks }}
    </div>
  </div>
</template>

<script>
import icon from '../../icons/icon.vue'
export default {
  name: 'stats',
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./stats.scss" scoped></style>
