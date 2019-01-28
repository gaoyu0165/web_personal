<template>
  <div class="profile">
<div id="header">
  <h2 class="header-h">个人资料</h2>
  </div>
<div id="main">
  <div class="main-inner">
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" ><img src="../assets/dong2.jpg" alt="朱东东的轱辘"></div>
        <p class="main-text"   data-aos-easing="ease-out-back" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="1000">车到山前必有路，哪怕山前拆车卖轱辘</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1500" ><img src="../assets/dong1.jpg" alt="朱东东的旅游"></div>
        <p class="main-text"   data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">就是爱旅行...各种游，人生的乐趣在于不断的发现新的生活方式和态度，并为之反思...</p>
    </div>
    <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000" ><img src="../assets/dong4.jpg" alt="这不是朱东东"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">这货不是朱东东...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000" ><img src="../assets/dong5.jpg" alt="朱东东的第一次养花"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">第一次养花，是那么美...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000"  style="width: 186px;"><img src="../assets/dong6.gif" alt="朱东东的一瞬间" style="width:180px"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-left" data-aos-delay="1000" data-aos-duration="1000">除了哈哈哈，好像也没什么好写了...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"  data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="1000" data-aos-duration="1000" ><img src="../assets/dong3.jpg" alt="朱东东的梦想"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-down-left" data-aos-delay="1000" data-aos-duration="1000">曾经有一个梦想...</p>
    </div>
  </div>
</div>
<footer>
  <div class="footer-inner">
  <div style="display:none;" id="rocket-to-top">
  <div style="opacity:0;display:block;" class="level-2"></div>
  <div class="level-3"></div>
  </div>
  </div>
</footer>  

</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg: 'profile'
    }
  }
}
</script>
<style scoped>
h1,h2,h3,h4,h5,h6,p{font-weight:normal;line-height: 1.2;}
h1,h2,h3,h4,h5,h6{font-family: "ZoomlaXingtiJ6"}
@font-face{font-family:'ZoomlaXingtiJ6';
    src: url('https://code.z01.com/font/ZoomlaXingtiJ6.eot?#iefix'); /* IE9 */
    src: url('https://code.z01.com/font/ZoomlaXingtiJ6.eot?#iefix') format("embedded-opentype"), /* IE6-IE8 */
    url('https://code.z01.com/font/ZoomlaXingtiJ6.woff') format("woff"), /* chrome、firefox */
    url('https://code.z01.com/font/ZoomlaXingtiJ6.ttf') format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
    url('https://code.z01.com/font/ZoomlaXingtiJ6.svg#ZoomlaXingtiJ6') format("svg"); /* iOS 4.1- */
    font-style: normal; font-weight: normal;}
/*hover*/
       abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
           margin: 0;
           padding: 0;
           /* cursor: url('../assets/hover.ico'),auto; */
       }

#header{height: 360px;background: url(../assets/banner3.jpg);background-attachment:fixed;}
.header-h{font-size: 50px;font-family:"ZoomlaXingtiJ6";text-align: center;line-height: 100px;padding-top: 150px;color: #e11313; }
#main{width: 100%;height: 100%;background: url(../assets/shadow-footer.png);}
.main-inner{width: 90%;max-width: 1560px;margin: 0 auto;}
.main-one{display:flex;justify-content: center;padding: 50px 0;align-items: center;}
.main-pic{width: 100%;max-width: 506px;margin:0 50px;}
.main-pic img{width: 100%;height: 100%;display: block;border: 3px #ccc solid;transition: all .5s;}
.main-text {max-width: 500px;border: 15px #ccc solid;height: 100%;padding: 50px;display: block;vertical-align: middle;margin:0 50px;border-image: url(../assets/2.png) 30 repeat;}
.main-pic img:hover{box-shadow: 5px 5px 5px #ccc;transform: translateY(-3px);}
.main-text:hover{color: #e83a3a;-webkit-animation: pulse 1s linear infinite;border: 15px #ccc solid;border-image: url(../assets/1.png) 30 repeat;
            animation: pulse 1s linear infinite;}
@keyframes pulse {
  0% {background:-webkit-linear-gradient(top right,  rgba(52,174,226,.1), rgba(69,232,137,.1));}

  50% {background:-webkit-linear-gradient(top right,  rgba(69,232,137,.1), rgba(52,174,226,.1));}

  100% {background:-webkit-linear-gradient(top right,  rgba(52,174,226,.1), rgba(69,232,137,.1));}
}

</style>
