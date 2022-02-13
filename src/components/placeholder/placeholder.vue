<template>
<div class="c-placeholder">
  <div class="placeholder__img"></div>
  <ul class="placeholder__list" v-for="n in 2" :key="n">
    <li class="placeholder__item" v-for="n in 3" :key="n"></li>
  </ul>
</div>

</template>

<style lang="cscc" src="./placeholder.scss" scoped></style>
