<template>
  <div class="sample">
    <Countdown date="December 2, 2017"></Countdown>
    <p><router-link to="/">{{ $t('buttons.home') }}</router-link></p>
  </div>
</template>

<script>
import Countdown from '../components/partials/Countdown.vue';

export default {
  components: { Countdown },
}
</script>
