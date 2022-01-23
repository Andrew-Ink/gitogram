<template>
  <div class="avatar">
    <img :src="avatar" class="avatar__img" alt="avatar" />
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/100/100'
    }
  }
}
</script>

<style lang="scss" src="./avatar.scss" scoped></style>
