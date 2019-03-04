<template>
  <div class="seo">

    <h1>百度,google搜索"猪东东"第一条就是</h1>
    <p>ps：没花费任何费用做竞价排名</p>
  </div>
</template>

<script>
export default {
  name: 'seo',
  data () {
    return {
      msg: 'seo'
    }
  },
  mounted(){
    document.title = "猪东东-搜索引擎优化"
  }    
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
h1{font-size: 1rem!important}
p{font-size: .9rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 

h1{position: absolute;left: 50%;top: 40%;transform: translate(-50%,-50%);z-index: 99;font-size: 2rem;color: #333;width: 100%}
p{position: absolute;left: 50%;top: 45%;transform: translate(-50%,-50%);z-index: 99;font-size: 1.8rem;color: #333;width:100%;text-align: center}

</style>
