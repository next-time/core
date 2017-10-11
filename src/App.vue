<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view></router-view>
    <div>
      <button @click="setLang(lang)" v-for="lang in locales" :disabled="isLang(lang)">{{ $t('locales.'+ lang) }}</button>
    </div>
    <Countdown date="December 2, 2017"></Countdown>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';

export default {
  components: { Countdown },
}
</script>

<style lang="stylus">
@import "../node_modules/typus" // base styles
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 50%

#app
  align() // jeet
  text-align center

.icon-logo
  margin-bottom 2.5rem
</style>
