<template>
  <div class="c-user">
    <div class="avatar-wrap">
      <avatar :avatar="avatar" />
    </div>
    <div class="userName">
      {{ userName }}
    </div>
  </div>
</template>

<script>
import avatar from '../avatar/avatar.vue'

export default {
  name: 'user',
  components: {
    avatar
  },
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/100/100'
    },
    userName: {
      type: String,
      required: true,
      default: 'John'
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
