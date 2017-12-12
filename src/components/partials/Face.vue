<template>
  <div id="halo">
    <svg version="1.1" id="face" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 213 138" xml:space="preserve">
      <g id="mouth">
        <path class="mouth__main" d="M147.3,110.4H69.7c0,0,0-39,37.4-39.9S147.3,110.4,147.3,110.4z"/>
        <path class="mouth__tang" d="M80.1,97.4c0,0,14-11.7,28.6,0.3c0,0,14.3-12.6,29-0.2c0,0-5.2,12.5-28.8,12.9C86.2,110.7,80.1,97.4,80.1,97.4z"/>
      </g>
      <g id="eyes">
        <ellipse class="eye eye__left" cx="55.2" cy="42.5" rx="14.7" ry="14.7"/>
        <ellipse class="eye eye__right" cx="162.6" cy="42.5" rx="14.7" ry="14.7"/>
      </g>
      <g id="blushes">
        <circle class="blush blush__left" cx="179.9" cy="93" r="14.7"/>
        <circle class="blush blush__right" cx="32.9" cy="93" r="14.7"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.eye()
    this.blush()
    this.mouthTang()
    this.mouthMain()
  },
  methods: {
    eye: function () {
      anime({
        targets: '#face .eye',
        ry: 2,
        loop: true,
        delay: 3300,
        duration: 120,
        easing: 'easeInQuart'
      })
    },
    blush: function () {
      anime({
        targets: '#face .blush',
        cy: 84.5,
        duration: 1200,
        delay: 5000
      })
    },
    mouthMain: function () {
      anime({
        targets: '#face .mouth__main',
        rotate: 180,
        duration: 1200,
        delay: 5000
      })
    },
    mouthTang: function () {
      anime({
        targets: '#face .mouth__tang',
        duration: 1200,
        delay: 5000,
        opacity: 1
      })
    }
  }
}
</script>

<style lang="stylus">
#face
  position relative
  height 100%
  #eyes
    margin 0 auto
  #eyes .eye,
  #mouth .mouth__main
    fill #192534
  #blushes .blush,
  #mouth .mouth__tang
    fill #EC497B
  #mouth
    .mouth__tang
      transform translateX(.5px)
      opacity 0
    .mouth__main
      transform-box fill-box
      transform-origin 50% 50%
</style>
