<template>
  <div class="hello">


<img v-lazy="msg">

  <div v-lazy-container="{ selector: 'img'}" >
  <img data-src="/banner.jpg">
</div>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'banner.jpg'
    }
  }
}
</script>
<style scoped>
</style>
