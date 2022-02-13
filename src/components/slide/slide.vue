<template>
  <div class="slide" :class="{ active }">
    <div class="slide__header">
      <progres :progresMove="active"  @onFinish="$emit('onProgressFinish')" />

      <user :avatar="data.userAvatar"
      :userName="data.userName" />
    </div>
    <div class="slide__content">
      <div class="loader" v-if="loading">
        <spinner />
      </div>

      <div class="content-text" v-else>
        <div
          v-if="data.content?.length"
          class="slide__text"
          v-html="data.content"
        ></div>
        <div class="placeholder" v-else>
          <placeholder />
        </div>
      </div>
    </div>
    <div class="slide__footer">
      <div class="slide__footer-content">
        <xbutton hoverText="unfollow" buttonText="follow" />
      </div>
      <template v-if="active" >
        <button v-if="btnsShow.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
          <span class="icon">
            <icon name="arrowRight" />
          </span>
        </button>
        <button v-if="btnsShow.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
          <span class="icon">
            <icon name="arrowLeft" />
          </span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import xbutton from '../button/button.vue'
import progres from '../progres/progres.vue'
import user from '../user/user.vue'
import spinner from '../spinner/spinner.vue'
import placeholder from '../placeholder/placeholder.vue'
import Icon from '../../icons/icon.vue'

export default {
  name: 'slide',
  components: {
    user,
    progres,
    xbutton,
    spinner,
    placeholder,
    Icon
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    hoverText: {
      type: String
    },
    buttonText: {
      type: String
    },
    active: Boolean,
    loading: Boolean,
    btnsShow: {
      type: Array,
      default: () => [
        'next', 'prev'
      ],
      Validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style src="./slide.scss" lang="scss" scoped></style>
