<template>
  <section id="app">
    <div id="border"></div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import "styles/theme"

html
  +below(750px)
    font-size .9em
  +below(600px)
    font-size .8em

body
  overflow hidden

#app
  text-align center

#border
  position fixed
  z-index -1
  border 12px solid transparent
  border-right-width 14px
  border-left-width 14px
  border-image url(assets/img/border.svg) 1% stretch
  top 0
  left 0
  right 0
  bottom 0

.icon-logo
  margin-bottom 2.5rem
</style>
