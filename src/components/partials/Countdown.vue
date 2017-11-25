<template>
  <div id="counterdown">
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
  p
    color #FFD2CA
  em
    font-family vision
    font-weight 100
    margin-right .7em
    font-size 2.25em
  b
    display inline-block
    font-family vision
    font-weight 900
    font-size 4em
    min-width 74px
    margin-right .1em

</style>
