<template>
  <div class="c-stories">
    <div class="header">
      <div class="x-conteiner">
        <div class="logo">
          <logo />
        </div>
        <button class="close-btn" @click="goToFeeds">
          <icon name="cross" />
        </button>
      </div>
    </div>
    <div class="content">
      <slider />
    </div>
  </div>

</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { slider } from '../../components/slider'

export default {
  name: 'stories',
  components: {
    logo,
    icon,
    slider
  },
  methods: {
    goToFeeds () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss" src="./stories.scss" scoped></style>
