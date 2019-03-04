<template>
  <div class="show">

    <div v-lazy-container="{ selector: 'img'}">
      <img data-src="/static/bigimg/show1.jpg">
      <br>
      <img data-src="/static/bigimg/show3.jpg">
      <br>
      <img data-src="/static/bigimg/show2.jpg">
      <br>   
      <img data-src="/static/bigimg/show4.jpg">
    </div>
    
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
  },
  mounted() {
    document.title = "猪东东-图片懒加载"
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
