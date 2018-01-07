<template>
  <div>
    <div id="container">
      <p v-html="$t('about')"></p>
    </div>
    <div id="background"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('border').style.display = 'none'
    this.animeBackground()
  },
  methods: {
    animeBackground: function() {
      let background = document.getElementById('background')
      let anBackground = anime({
        targets: background,
        easing: 'easeInOutQuart',
        right: '-15%',
        width: '200vh'
      })
    }
  },
  beforeDestroy() {
    document.getElementById('border').style.display = 'block'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#container
  position absolute
  width 30vw
  text-align left
  top 50%
  left 50%
  transform translate(-50%, -50%)
  +below(900px)
    width inherit
  p
    letter-spacing .13em
    font-family vision
    line-height 1.4em
#background
  position absolute
  z-index -1
  height 200vh
  width 20vh
  background-color #E7F3FF
  border-radius 100%
  right -10%
  top -50%
  +below(900px)
    display none
</style>
