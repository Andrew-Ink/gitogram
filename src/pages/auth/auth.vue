<template>
  <div class="c-auth">
    <div class="auth">
      <div class="auth__content">
        <div class="logo">
          <logo />
        </div>
        <div class="auth__desc">
          More than just one repository. This is our digital world.
        </div>
          <button class="auth__button" @click="getCode">
            <div class="auth__button-text">Authorize with github</div>
            <div class="auth__button-icon">
              <icon name="octoCat" />
            </div>
          </button>
      </div>
      <div class="img-wrap">
        <img src="../../img/device.png" alt="device" />
      </div>
    </div>
    <footer class="footer">
      <div class="footer__text">© Gitogram from Loftschool</div>
    </footer>
  </div>
</template>

<script>

import { logo } from '../../components/logo'
import { icon } from '../../icons'
// import { clientId, clientSecret } from '../../../env.js'
import env from '../../../env'

export default {
  name: 'auth',
  components: {
    logo,
    icon
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user user:follow')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'applications/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })

        const { token } = await response.json()

        localStorage.setItem('token', token)
        this.$router.replace('/feeds')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" src="./auth.scss" scoped></style>
