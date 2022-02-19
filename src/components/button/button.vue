<template>
  <div class="c-button">
    <button class="button"
    :class="[{themeGray: theme === 'gray'}, {themeGreen: theme === 'green'}]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">
      <div class="loader" v-if="loading">
        <div class="spinner-wrap">
          <spinner />
        </div>
      </div>
      <span class="button__text" v-else>
        <span class="button-text" v-if="isHover">
          {{ hoverText }}
        </span>
       <!-- <slot></slot> -->
       <span class="button-text" v-if="!isHover">
         {{ buttonText }}
       </span>
      </span>
    </button>
  </div>
</template>

<script>
import { spinner } from '../spinner'

export default {
  name: 'xbutton',
  components: {
    spinner
  },
  props: {
    loading: {
      type: Boolean
    },
    theme: {
      type: String
    },
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
