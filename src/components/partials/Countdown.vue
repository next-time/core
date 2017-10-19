<template>
  <div id="counterdown">
    <div>
      <p>{{ days | two_digits }}</p>
      <p>{{ $t('counter.days') }}</p>
    </div>
    <div>
      <p>{{ hours | two_digits }}</p>
      <p>{{ $t('counter.hours') }}</p>
    </div>
    <div>
      <p>{{ minutes | two_digits }}</p>
      <p>{{ $t('counter.minutes') }}</p>
    </div>
    <div>
      <p>{{ seconds | two_digits }}</p>
      <p>{{ $t('counter.seconds') }}</p>
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
