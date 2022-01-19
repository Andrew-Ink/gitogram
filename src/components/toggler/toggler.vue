<template>
  <button :class="[{active:show}, 'toggler']" @click="onToggle">
    <span class="toggler__title">{{ buttonText }} issues</span>
    <span class="toggler__icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import icon from '../../icons/icon.vue'
export default {
  name: 'toggler',
  components: {
    icon
  },
  emits: ['onToggle'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    buttonText () {
      return this.show ? 'Hide' : 'View'
    }
  },
  methods: {
    onToggle () {
      this.show = !this.show
      this.$emit('onToggle', this.show)
    }
  }
}
</script>

<style lang="scss" src="./toggler.scss" scoped></style>
