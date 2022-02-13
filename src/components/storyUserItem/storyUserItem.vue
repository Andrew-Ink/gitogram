<template>
  <div class="c-story-user-item">
    <button class="user-avatar" @click="goToStories">
     <avatar :avatar="data.userAvatar" class="avatar" />
    </button>
    <div class="user-name">
      {{ data.userName }}
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
export default {
  name: 'storyUserItem',
  components: {
    avatar
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    goToStories () {
      this.$router.push(`/stories/${this.data.id}`)
    }
  }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>
