<template>
  <div class="c-button">
    <button class="button" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <span class="button-text" v-if="isHover">
        {{ hoverText }}
      </span>
      <!-- <slot></slot> -->
      <span class="button-text" v-if="!isHover">
        {{ buttonText }}
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
    },
    buttonText: {
      type: String
    }
  },
  data () {
    return {
      isHover: false
    }
  },
  methods: {
    onMouseEnter () {
      this.isHover = true
    },
    onMouseLeave () {
      this.isHover = false
    }
  }
}
</script>

<style lang="scss" src="./button.scss" scoped></style>
