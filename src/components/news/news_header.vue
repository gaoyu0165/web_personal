<template>
<div id="header">
  <h2 class="header-h"><img src="../../../static/bigimg/news.png" alt="猪东东"></h2>
  <p class="header_p">—有深度的好内容</p>
</div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'news'
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
#header .header_p{font-size: .5rem!important;padding-top: .1rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 401px) {
#header .header_p{font-size: .4rem!important;padding-top: .1rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 1024px) {
#header .header_p{font-size: .6rem!important;padding-top: .2rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
#header .header_p{font-size: .8rem;color: #666;text-align: center;padding-top: 1rem;padding-left: 10rem;}
</style>
