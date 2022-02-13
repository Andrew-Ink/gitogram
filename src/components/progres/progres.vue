<template>
  <div :class="{ active }" class="progres">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    progresMove: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
      this.active = false
    }
  },
  mounted () {
    if (this.progresMove) {
      this.active = true
    }
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  updated () {
    this.active = !!this.progresMove
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style src="./progres.scss" lang="scss" scoped></style>
