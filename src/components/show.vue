<template>
  <div class="show">
    <!-- <video src="/static/bigimg/lol.mp4" autoplay="autoplay" loop="loop"></video>
        <div class="loadingImg">
        <img v-lazy="img" alt="高清无码" v-for="img in list" :key="img.id" ondragstart="return false">
    </div>-->
    <div v-lazy-container="{ selector: 'img'}">
      <img data-src="http://img.netbian.com/file/2018/0824/ece0c46a8f0eda2d2fcf5a6706462a16.jpg">
      <br>
      <img data-src="http://img.netbian.com/file/2018/0209/8df92d94b9a270b022131a54274c804d.jpg">
      <br>
      <img data-src="http://img.netbian.com/file/2018/0223/8ead41c8ffafcfdedc4e9b2b35f2a178.jpg">
      <br>
      <img
        data-src="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0B/0D/ChMkJ1vfv8CIPE_KAAXxnkEREWgAAs9xAG8-zQABfG2168.jpg"
      >
      <br>
      <img data-src="http://img.netbian.com/file/2018/0625/562b13833627932e24d359a4a3aff333.jpg">
      <br>
      <img data-src="http://img.netbian.com/file/2019/0125/c044b7e72b514270ab54a6224c1cb251.jpg">
      <br>
      <img data-src="http://img.demaxiya.com/uploads/allimg/150210/DJSonaKinetic.jpg">
      <br>
      <img data-src="http://img.netbian.com/file/2017/1218/de7046b0fe2c04ec82553372c15f1938.jpg">
      <br>
    </div>
    <img src="../../static/bigimg/9.jpg" alt>
  </div>
</template>

<script>
export default {
  name: "show",
  data() {
    return {
      // list:[
      //     "/static/bigimg/1.jpg",
      //     "/static/bigimg/2.jpg",
      //     "/static/bigimg/3.jpg",
      //     "/static/bigimg/4.jpg",
      //     "/static/bigimg/5.jpg",
      //     "/static/bigimg/7.jpg",
      //     "/static/bigimg/8.jpg",
      //     "/static/bigimg/9.jpg",
      // ]
    };
  }
};
</script>
<style scoped>
@media screen and (max-width: 801px) {
  .show video {
    display: none;
  }
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */

.show {
  width: 100%;
}
.show img,
video {
  width: auto;
  max-width: 100%;
}

/* 图片懒加载 */
img[lazy="loading"] {
}
img[lazy="loaded"] {
  animation: fade 0.5s;
}
img {
  transition: all 0.5s;
  display: block;
  width: 400px;
  margin: 0 auto;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.gototop {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #f2f2f5;
  position: fixed;
  right: 30px;
  bottom: 50px;
  font-size: 12px;
  cursor: pointer;
}
.gototop a {
  color: #666;
  line-height: 20px;
  display: inline-block;
}
</style>
