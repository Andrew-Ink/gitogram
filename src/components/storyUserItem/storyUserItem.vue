<template>
  <div class="c-story-user-item">
    <button class="user-avatar">
     <avatar :src="avatar" class="avatar" />
    </button>
    <div class="usermame">
      {{ username }}
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
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>
