<template>
  <section>
    <h2 id="baseline">{{ $t('messages.welcome') }}</h2>
    <div id="container">
      <router-link to="/season/winter" class="bubble green">
        <img src="../assets/img/wraps/seasons/winter.svg" alt="Winter Wrap">
      </router-link>
      <router-link to="/season/spring" class="bubble red">
        <img src="../assets/img/wraps/seasons/spring.svg" alt="Winter Wrap">
      </router-link>
      <router-link to="/season/summer" class="bubble blue">
        <img src="../assets/img/wraps/seasons/summer.svg" alt="Winter Wrap">
      </router-link>
    </div>
    <div id="lang">
      <a href="#" @click="setLang('fr')" v-show="isLang('en')">🇫🇷</a>
      <a href="#" @click="setLang('en')" v-show="isLang('fr')">🇺🇸</a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang='stylus' scoped>
  #baseline
    text-align center
    margin-top 2.6em
    font-size 1.8em
    font-family vision
    font-weight 400
    +below(1200px)
      font-size .7em
  #container
    +below(750px)
      display block
      width 85%
      margin 2em auto 0

  .bubble
    position relative
    width 18vw
    height 18vw
    box-shadow 0 30px 30px 0 rgba(0, 0, 0, 0.08)
    display inline-block
    border-radius 100%
    margin-top 7em
    cursor pointer
    transition box-shadow .2s
    &:active
      box-shadow 0 15px 15px 0 rgba(0, 0, 0, 0.06)
    &:nth-child(2)
      margin 0 4em
    &.blue
      background-color #cbe0ed
    &.red
      background-color #FCE3DF
    &.green
      background-color #B5EAC2
    img
      position absolute
      width 80%
      max-height 80%
      left 50%
      top 50%
      transform translate(-50%, -50%)
    +below(800px)
      margin-top 2em
    +below(650px, orientation: portrait)
      margin 2em auto!important
      width 30vw
      height 30vw
      display block
    +below(340px, orientation: portrait)
      width 25vw
      height 25vw

  #lang
    position absolute
    bottom 1.7em
    right 1.7em
    a
      margin 0 .25em
      font-size 2.2em
</style>
