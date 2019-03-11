<template>
  <div class="profile">
<div id="header">
  <h2 class="header-h">宝❤贝</h2>
  </div>
<div id="main">
  <div class="main-inner">
  <el-carousel :interval="4000" type="card" height="18rem" class="main-inner-item">
    <el-carousel-item v-for="item in items" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item" alt="猪东东">       
    </el-carousel-item>
  </el-carousel>    
          <p id="regtime"></p>

  <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin1.jpg" alt="猪东东的轱辘"></div>
        <p class="main-text"   data-aos-easing="ease-out-back" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">我想咬你啊❤</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin2.jpg" alt="猪东东的旅游"></div>
        <p class="main-text"   data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">虽然有点.小，但是我喜欢呀...</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin3.jpg" alt="东东"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000">再来一个剪刀手...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin4.jpg" alt="猪东东的第一次养花"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">无敌是多么，多么寂寞(眼神)...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin5.jpg" alt="猪东东的一瞬间" style="width:180px"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="500" data-aos-duration="1000">这大长腿...啧啧啧，可以玩一整年</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin6.jpg" alt="猪东东的工作"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="500" data-aos-duration="1000">羞涩...</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin7.jpg" alt="这不是猪东东"></div>
        <p class="main-text" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">嗯啊嗯啊...</p>
    </div>    
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin8.jpg" alt="猪东东的梦想"></div>
        <p class="main-text" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">不要...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/loveimg/xin9.jpg" alt="猪东东的梦想"></div>
        <p class="main-text" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">你怎么这么有才呀</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000" ><img src="../../static/bigimg/love5.jpg" alt="猪东东的梦想"></div>
        <p class="main-text">我为我的她梦想的一幅画</p>
    </div>
  </div>
</div>


</div>
</template>

<script>
export default {
  name: 'tanxin',
  data () {
    return {
      msg: 'tanxin',
      items:[
          "/static/bigimg/love4.jpg",
          "/static/bigimg/love.jpg",
          "/static/bigimg/love2.jpg",
          "/static/bigimg/shou.jpg",
          "/static/bigimg/love3.jpg",
      ]
    
    }
  },
  mounted(){
    var self = this
    document.title = document.querySelector(".header-h").innerText
    setInterval(function(){
      self.time("2018/12/22 22:09:09");
    },1000)
  },
  methods:{
    addZero(time) {
      if (time < 10) {
        return "0" + time;
      } else {
        return time;
      }
    },
    time(regtime) {
        var regtime = new Date(regtime);
        var newtime = new Date();
        var timesecond = parseInt(newtime.getTime() - regtime.getTime()) / 1000;
        var d = parseInt(timesecond / (24 * 60 * 60));
        var h = parseInt((timesecond / (60 * 60)) % 24);
        var m = parseInt((timesecond / 60) % 60);
        var s = parseInt(timesecond % 60);
        d = this.addZero(d);
        h = this.addZero(h);
        m = this.addZero(m);
        s = this.addZero(s);
        document.getElementById("regtime").innerText = 
          "我们已经认识了" + d + "天" + h + "小时" + m + "分" + s + "秒"
    }    
  }
  }
</script>
<style scoped>
@import "../../public/css/love.css"
</style>
