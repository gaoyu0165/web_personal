<template>
  <div class="profile">
    <div id="header">
      <h2 class="header-h">廖❤兴</h2>
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
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing8.jpg" alt="猪东东的轱辘">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos-delay="500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >第一次和她相见:
            <br>我猜到了故事的开头，却没猜到故事的结局
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing1.jpg" alt="猪东东的轱辘">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos-delay="500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >第一次陪她吃饭的味道:
            <br>如果就这样一辈子该多好！
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing10.jpg" alt="这不是猪东东">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >第一次跟她学抽烟：
            <br>我愿用全村人单身,换一个她
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing6.jpg" alt="这不是猪东东">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >黄天在上,厚土为证:
            <br>就再也戒不掉了
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing7.jpg" alt="猪东东的工作">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >第一次在办公室电脑都换上了同一个她</p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing9.jpg" alt="猪东东的工作">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >第一次离不开一个人</p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing3.jpg" alt="东东">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >第一次和她闹分手</p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing5.jpg" alt="猪东东的一瞬间">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-up-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >第一次感觉游戏没什么意思了</p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing4.jpg" alt="猪东东的第一次养花">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >第一次带它，听说这样就是有对象了</p>
        </div>

        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="flip-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/loveimg/liaoxing2.jpg" alt="猪东东的旅游">
          </div>
          <p
            class="main-text"
            data-aos-easing="ease-out-back"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >她留给我的最后一张相片</p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="../../static/bigimg/love5.jpg" alt="猪东东的梦想">
          </div>
          <p class="main-text">我为我的她梦想的一幅画:
            <br>那些清澈而美好的时光，再也回不去了
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tanxin",
  data() {
    return {
      msg: "tanxin",
      items: [
        "/static/bigimg/love4.jpg",
        "/static/bigimg/love.jpg",
        "/static/bigimg/love2.jpg",
        "../../static/loveimg/liaoxing8.jpg",
        "/static/bigimg/love3.jpg"
      ]
    };
  },
  mounted() {
    var self = this
    document.title = document.querySelector(".header-h").innerText;
    setInterval(function(){
      self.time("2018/10/06 10:10:10");
    },1000)
  },
  methods: {
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
};
</script>
<style scoped>
@import "../../public/css/love.css";
</style>
