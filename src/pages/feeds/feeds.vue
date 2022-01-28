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
          <li class="stories__item" v-for="item in items" :key="item.id">
            <storyUserItem :avatar="item.owner.avatar_url" :username="item.name" />
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
import * as api from '../../components/api'

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
  data () {
    return {
      items: []
    }
  },
  methods: {},
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
      console.log(this.items)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss"></style>
