<template>
  <header>
    <router-link to="/">
      <h1 id="logo">
        <em>The</em>
        <b>next time</b>
      </h1>
    </router-link>
    <h2 id="baseline">{{ $t('messages.welcome') }}</h2>
    <nav>
      <ul>
        <li><router-link to="/about">about</router-link></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import "styles/theme"

header
  padding-top 2.25em
#logo
  text-align center
  font-family vision
  font-size 2.7em
  color black
  em
    font-family vision
    font-style italic
    font-size 0.7em
    transform translateX(.3em)
    display inline-block
    margin-right .1em
  b
    font-size 0.8em
    font-weight 700
    display inline-block
    transform translate(-0.2em, 0.5em)
    letter-spacing -0.45px
#baseline
  text-align center
  margin-top 2.6em
  font-size 24px
  font-family vision
  font-weight 400
nav
  font-family vision
  list-style none
  position absolute
  top 10em
  right -.4em
  transform rotateZ(270deg)
  li
    display inline-block
    &:last-child
      margin-left 1em
  a
    color black
    letter-spacing 1.11px
    position relative
    &:after
      content ''
      position absolute
      width 0%
      height 1px
      left 0
      bottom -1px
      background-color black
      transition width 300ms ease-in-out
    &:hover::after
      width 100%
</style>
