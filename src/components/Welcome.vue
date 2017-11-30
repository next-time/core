<template>
  <section>
    <h2 id="baseline">{{ $t('messages.welcome') }}</h2>
    <div id="container">
      <router-link to="/sample" class="bubble blue"></router-link>
      <router-link to="/sample" class="bubble red"></router-link>
      <router-link to="/sample" class="bubble yellow"></router-link>
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
    font-size 24px
    font-family vision
    font-weight 400
  #container
    +below(750px)
      display flex
      width 85%
      margin 2em auto 0
      flex-wrap wrap
      justify-content space-around

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
      background-color #dcedff
    &.red
      background-color #FCE3DF
    &.yellow
      background-color #FCEED3
    +below(750px)
      margin 0!important
      width 30vw
      height 30vw

</style>
