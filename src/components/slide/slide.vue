<template>
  <div class="slide">
    <div class="slide__header">
      <progres />
      <user />
    </div>
    <div class="slide__content">
      <div class="slide__img-wrap">
        <img src="../../img/slide-img.png" alt="image slide" class="slide__img" />
      </div>
      <div class="slide__text">
        <p>
          <span class="slide__text-title">The easiest</span> way to get .NET 6 Preview 4 is to install the maui-check
          dotnet tool from CLI and follow the instructions.
        </p>
        <p>
          For running on Mac you'll currently use your favorite text editor and
          terminal to edit and run apps. We expect Visual Studio for Mac .NET 6
          support to begin arriving mid-year.
        </p>
        <p>
          In Preview 4 we enable push/pop navigation with NavigationPage. We
          added a concrete implementation of IWindow, and completed porting
          ContentPage from Xamarin.Forms
        </p>
        <p>
          For running on Mac you'll currently use your favorite text editor and
          terminal to edit and run apps. We expect Visual Studio for Mac .NET 6
          support to begin arriving mid-year.
        </p>
      </div>
    </div>
    <div class="slide__footer">
      <div class="slide__footer-content">
        <xbutton :hoverText=" hoverText" :buttonText="buttonText" />
      </div>
    </div>
  </div>
</template>

<script>
import xbutton from '../button/button.vue'
import progres from '../progres/progres.vue'
import user from '../user/user.vue'

export default {
  name: 'slide',
  components: {
    user,
    progres,
    xbutton
  },
  props: {
    hoverText: {
      type: String
    },
    buttonText: {
      type: String
    }
  }
}
</script>

<style src="./slide.scss" lang="scss" scoped></style>
