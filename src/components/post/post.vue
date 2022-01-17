<template>
  <avatar :src=user class="avatar"/>
</template>

<script>
import { avatar } from '../avatar'
export default {
  name: 'post',
  components: {
    avatar
  },
  props: {
    user: {
      type: String,
      required: true,
      default: 'https://picsum.photos/100/100'
    }
  }
}
</script>

<style lang="scss" src="./post.scss" scoped></style>
