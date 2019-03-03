<template>
  <div id="app">
  	<app-header></app-header>
    <app-slider></app-slider>

  </div>
</template>

<script>
import header from './sample.vue'
import slider from './slider.vue'
export default {
  name: 'app',
  components:{
  	'app-header': header,
    'app-slider': slider
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
@import url('https://fonts.googleapis.com/css?family=Lato');

</style>
