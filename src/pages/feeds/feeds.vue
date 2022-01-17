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
          <li class="stories__item" v-for="user in users" :key="user.id">
            <storyUserItem
              :avatar="user.avatar"
              :username="user.name"
            />
          </li>
        <!-- </ul>
        <ul class="post">
          <li class="post__item">
            <post />
          </li> -->
        </ul>
      </template>
    </topline>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { storyUserItem } from '../../components/storyUserItem'
import users from './users.json'
import { navBar } from '../../components/navBar'
// import { post } from '../../components/post'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    storyUserItem,
    navBar
    // post
  },
  data () {
    return {
      users
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss"></style>
