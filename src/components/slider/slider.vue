<template>
  <div class="c-slider">
    <div class="x-conteiner">
      <ul class="slider__list" ref="slider">
        <!-- {{ $route.params.id }} -->
        <li
          class="slider__item"
          v-for="(trending, ndx) in trendings"
          :key="trending.id"
          ref="item"
        >
          <slide
          :data="getStoryData(trending)"
          :btnsShow="activeBtns"
          :active="slideNdx === ndx"
          :loading="slideNdx === ndx && loading"
          @onNextSlide="handleSlide(ndx + 1)"
          @onPrevSlide="handleSlide(ndx - 1)"
          @onProgressFinish="handleSlide(ndx + 1)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slide } from '../slide'
import { mapState } from 'vuex'

export default {
  name: 'slider',
  components: {
    slide
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShow: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns () {
      if (this.btnsShow === false) {
        return []
      }
      if (this.slideNdx === 0) {
        return ['next']
      }
      if (this.slideNdx === this.trendings.length - 1) {
        return ['prev']
      }
      return ['next', 'prev']
    }
  },
  methods: {
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userName: obj.owner?.login,
        content: obj.readme
      }
    },
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]

      await this.$store.dispatch('fetchReadme', { id, owner: owner.login, repo: name })
    },
    async loadReadme () {
      this.loading = true
      this.btnsShow = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.error(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShow = true
      }
    },
    moveSlider (slideNdx) {
      if (slideNdx === this.trendings.length) return
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item[slideNdx]).getPropertyValue('width'), 10
      )
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async created () {
    await this.$store.dispatch('fechTrendings')
    await this.loadReadme()
  },
  mounted () {
    const ndxItem = this.trendings.findIndex(item => item.id === Number(this.$route.params.id))
    this.moveSlider(ndxItem)
  }
}
</script>

<style lang="scss" src="./slider.scss" scoped></style>
