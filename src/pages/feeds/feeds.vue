<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="logo">
          <logo />
        </div>
        <navBar />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="trending in trendings" :key="trending.id">
              <storyUserItem :data="getStoryData(trending)" />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="conteiner">
    <ul class="posts">
      <li class="posts__item" v-for="n in 5" :key="n">
        <post>
          <template #card>
            <card />
          </template>
        </post>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { storyUserItem } from '../../components/storyUserItem'
import { navBar } from '../../components/navBar'
import { post } from '../../components/post'
import { card } from '../../components/card'
import { mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    storyUserItem,
    navBar,
    post,
    card
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    })
  },
  methods: {
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userName: obj.name
      }
    }
  },
  async created () {
    await this.$store.dispatch('fechTrendings')
  }
}
</script>

<style lang="scss" src="./feeds.scss"></style>
