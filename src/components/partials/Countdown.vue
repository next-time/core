<template>
  <div id="counterdown" :style="{color: color}">
    <p>
      <b>{{ days | two_digits }}</b>
      <em>{{ $t('counter.days') }}</em>
      <b>{{ hours | two_digits }}</b>
      <em>{{ $t('counter.hours') }}</em>
      <b>{{ minutes | two_digits }}</b>
      <em>{{ $t('counter.minutes') }}</em>
      <b>{{ seconds | two_digits }}</b>
      <em>{{ $t('counter.seconds') }}</em>
    </p>
    <div id="until">
      <em>Until</em>
      <b>{{ this.until }}</b>
    </div>
  </div>
</template>


<script>
export default {

  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },

  props: {
    date: {
      type: String
    },
    until: {
      type: String
    },
    color: {
      type: String
    }
  },

  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },

  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }

}
</script>

<style lang="stylus" scoped>
#counterdown
  margin-top 2em
  +below(1200px)
    font-size .6em
  +below(900px)
    margin-top 3.5em
  +below(700px)
    font-size .3em
  p
    em
      font-family vision
      font-weight 100
      margin-right .7em
      font-size 2.25em
      +below(700px)
        margin-right .6em
    b
      display inline-block
      font-family vision
      font-weight 900
      font-size 4em
      min-width 74px
      margin-right .1em
      +below(700px)
        margin-right .2em
        min-width 0
  #until
    display block
    width 55%
    text-align left
    margin 1.5em auto 0
    em
      font-family vision
      font-weight 100
      margin-right .7em
      font-size 2em
      display block
      font-style italic
    b
      display inline-block
      font-family vision
      font-weight 700
      font-size 3.5em
      min-width 74px
      margin-right .1em
      transform translate(28%, -30%)

</style>
