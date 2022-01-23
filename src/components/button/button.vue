<template>
  <div class="c-button">
    <button class="button">
      <span class="button-text">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'xbutton',
  props: {
    hoverText: {
      type: String
    }
  }
}

</script>

<style lang="scss" src="./button.scss" scoped></style>
