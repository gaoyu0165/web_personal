<template>
  <div class="profile">
<div id="header">
  <h2 class="header-h"><img src="../../static/bigimg/personal.png" alt="猪东东"></h2>
  </div>
<div id="main">
  <div class="main-inner">

  <div class="main-one">
    <div class="main-pic" data-aos-easing="ease-out-back" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000" ><img src="../assets/dong2.jpg" alt="猪东东的轱辘"></div>
        <p class="main-text"   data-aos-easing="ease-out-back" data-aos-delay="800" data-aos="fade-up" data-aos-duration="1000">车到山前必有路，哪怕山前拆车卖轱辘</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="flip-up" data-aos-delay="800" data-aos-duration="1000" ><img src="../assets/dong1.jpg" alt="猪东东的旅游"></div>
        <p class="main-text"   data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000">人生的乐趣在于不断的发现新的生活方式和态度，并为之反思...</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="800" data-aos-duration="800" ><img src="../assets/dong4.jpg" alt="东东"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="800" data-aos-duration="1000">再朴素的衣着也遮不住你那坚毅的眼神...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000" ><img src="../assets/dong5.jpg" alt="猪东东的第一次养花"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">第一次养花，那么美...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000"  style="width: 186px;"><img src="../assets/dong6.gif" alt="猪东东的一瞬间" style="width:180px"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="1000">啊哈哈哈...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000" ><img src="../assets/12321.jpg" alt="猪东东的工作"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="1000">不要问我是做什么的...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000" ><img src="../assets/wo3.jpg" alt="猪东东的工作"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="1000">偶尔也画下...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000" ><img src="../assets/wo2.jpg" alt="猪东东的工作"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="1000">酷爱运动健身...</p>
    </div>
    <!-- <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000" ><img src="../assets/wo.jpg" style="width:180px" alt="这不是猪东东"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">小小一张...</p>
    </div>     -->
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="800" data-aos-duration="1000" ><img src="../assets/dong3.jpg" alt="猪东东的梦想"></div>
        <p class="main-text">i have a dreame...</p>
    </div>
  </div>
</div>


</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg: 'profile',

    
    }
  },
  mounted(){
    document.title = "猪东东-个人资料"
  }      
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column;padding: 1rem 0!important; }
.main-pic img{max-width: 100%!important;margin: 0 auto;}
.el-carousel{margin: 1.5rem 0 0rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


h1,h2,h3,h4,h5,h6,p{font-weight:normal;line-height: 1.2;}
@font-face{font-family:'ZoomlaXingtiJ6';
    src: url('https://code.z01.com/font/ZoomlaXingtiJ6.eot?#iefix'); /* IE9 */
    src: url('https://code.z01.com/font/ZoomlaXingtiJ6.eot?#iefix') format("embedded-opentype"), /* IE6-IE8 */
    url('https://code.z01.com/font/ZoomlaXingtiJ6.woff') format("woff"), /* chrome、firefox */
    url('https://code.z01.com/font/ZoomlaXingtiJ6.ttf') format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
    url('https://code.z01.com/font/ZoomlaXingtiJ6.svg#ZoomlaXingtiJ6') format("svg"); /* iOS 4.1- */
    font-style: normal; font-weight: normal;}

.profile{width: 100%;overflow: hidden;padding:0 0 2rem}
#main{width: 100%;height: 100%;background: url(../assets/shadow-footer.png);}
.main-inner{width: 90%;max-width: 1560px;margin: 0 auto;}
.main-one{display:flex;justify-content: center;padding: 3rem 0;align-items: center;}
.main-pic{width: 100%;max-width: 506px;margin:0 50px;}
.main-pic img{width: auto;height: auto;display: block;border: 3px #ccc solid;transition: all .5s;max-width: 512px;}
.main-text {max-width: 500px;border: 15px #ccc solid;height: 100%;padding: 2rem;display: block;vertical-align: middle;margin:0 50px;border-image: url(../assets/2.png) 30 repeat;}
.main-pic img:hover{box-shadow: 3px 3px 3px #ccc;transform: translateY(-1px);}
.main-text:hover{color: #e83a3a;-webkit-animation: pulse 1s linear infinite;border: 15px #ccc solid;border-image: url(../assets/1.png) 30 repeat;
            animation: pulse 1s linear infinite;}
@keyframes pulse {
  0% {background:-webkit-linear-gradient(top right,  rgba(52,174,226,.1), rgba(69,232,137,.1));}

  50% {background:-webkit-linear-gradient(top right,  rgba(69,232,137,.1), rgba(52,174,226,.1));}

  100% {background:-webkit-linear-gradient(top right,  rgba(52,174,226,.1), rgba(69,232,137,.1));}
}

/* 走马灯 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
