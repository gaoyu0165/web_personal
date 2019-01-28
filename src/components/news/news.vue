<template>
  <div class="news">
<div id="header">
  <h2 class="header-h">葵花宝典</h2>
</div>
  <div id="main">
    <dl class="classiclist" aos="flip-left" aos-easing="ease">
     <a href="" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic3.jpg" alt="朱东东移动Web端性能优化探索"></dd>
      <dt class="classiclist-h">移动Web端性能优化探索</dt>
     </a>
    </dl>
    <dl class="classiclist" aos="flip-left" aos-easing="ease">
     <a href="" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic6.jpg" alt="朱东东当你扛不住的时候"></dd>
      <dt class="classiclist-h">别动我...</dt>
     </a>
    </dl>
    <dl class="classiclist" aos="flip-left" aos-easing="ease">
     <router-link to="/news/news1" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic9.gif" alt="朱东东2018UI设计趋势"></dd>
      <dt class="classiclist-h">2018UI设计趋势<img src="../../assets/hot.gif"></dt>
     </router-link>
    </dl>
    <dl class="classiclist" aos="flip-left" aos-easing="ease">
     <router-link to="/news/news2" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic19.jpg" alt="朱东东BAT公司内部岗位级别和薪资结构"></dd>
      <dt class="classiclist-h">BAT公司内部岗位级别和薪资结构<img src="../../assets/hot.gif"></dt>
     </router-link> 
    </dl>
    <dl class="classiclist" aos="flip-left" aos-easing="ease">
     <router-link to="/news/news3" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic26.jpg" alt="朱东东一个小格子一天500万"></dd>
      <dt class="classiclist-h">一个小格子一天500万<img src="../../assets/gif1.gif"></dt>
     </router-link>
    </dl>

  </div>  </div>
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
*{padding:0;
  margin:0;
 font-family:"Arial","Microsoft YaHei","微软雅黑","STXihei","华文细黑"}
li{list-style:none;}
a{outline:none;
  text-decoration:none;}
body{background: url(../../assets/shadow-footer.png);}
img{border:none;}
h1,h2,h3,h4,h5,h6,p{font-weight:normal;line-height: 1.2;}
header{width: 100%;height: 70px;position: fixed;transition: all 1s;z-index: 99;}
header:hover{background:rgba(0,0,0,.1);}
header:hover .nav{display: block;transform: translateY(0);}
.nav{transform: translateY(-70px);transition: all 1s;}
.header-inner{width: 90%;max-width: 1560px;  margin: 0 auto;display: flex;justify-content: flex-start;}
.logo{background: url(../../assets/logo2.png) 50% 50% no-repeat;height: 70px;width: 70px;transition: all 5s ease-in-out;transition-delay:.3s;}
header:hover .logo{transform:rotate(30deg);}
.banner-h3{text-align: center;font-size: 30px;line-height: 
50px;}
.banner-h1{text-align: center;font-size: 58px;line-height: 1.5;}
/*hover*/
       abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
           margin: 0;
           padding: 0;
           /* cursor: url('../../assets/hover.ico'),auto; */
       }
/*nav*/
.nav>li{
    float:left;
    position:relative;
    padding: 0 10px;
    }
.active{margin: 0 10px;background:url(../../assets/active_03.png) no-repeat right top;position: relative;  padding-right: 20px;}
.active::after{content: ""; width: 0px;height: 1px;background: rgba(225,19,19,.8) ;position: absolute;left: 50%;bottom: 0;transform: translate(-50% ,0);transition: all .5s}
.active:hover::after{width: 102.5px;}
.nav li a{
    font-size:16px;
    color:#fff;;
    line-height:70px;
    font-weight: 500;
    display:block;
    }
.nav li a:hover{color: #8be54b;}
.sub_nav{
    width:100px;
    border:1px  rgba(0,0,0,.1) solid;
    border-radius:0 0 8px 8px;
    position:absolute;
    left:50%;
    top:70px;
    overflow: hidden;
    display:none;
    transform: translate(-50% ,0);
    }
.sub_nav li a{
    display:block;
    border-top:1px rgba(0,0,0,.1) solid;
    border-bottom:1px rgba(0,0,0,.1) solid;
    text-align: center;
    line-height: 50px;
    background-color:rgba(255,255,255,.3);
    }
.sub_nav li a:hover{
    background-color:rgba(225,19,19,.7);
    color: #79cc43;
    }
/*闪电按钮*/
.button--tamaya{overflow: hidden;color: #f00;width: 100px;height: 50px;line-height: 50px; vertical-align: middle;position: relative;z-index: 1;}
.button--tamaya::before,
.button--tamaya::after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    background: rgba(121,134,203,.7);
    color: #fff;
    overflow: hidden;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--tamaya::before {
    top: 0;
}
.button--tamaya::after {
    bottom: 0;
    line-height: 0;
}
.button--tamaya > span {
    display: block;
    -webkit-transform: scale3d(0.2, 0.2, 1);
    transform: scale3d(0.2, 0.2, 1);
    opacity: 0;
    font-size: 16px;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--tamaya:hover::before {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}
.button--tamaya:hover::after {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}
.button--tamaya:hover > span {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
#header{height: 360px;background: url(../../assets/banner3.jpg);background-attachment:fixed;}
.header-h{font-size: 50px;font-family:"ZoomlaXingtiJ6";text-align: center;line-height: 100px;padding-top: 150px;color: #e11313;z-index: 66; }
#main{width: 80%;height: 100%;display: flex;margin: 0 auto;justify-content: center;flex-wrap: wrap;}
.classiclist{height: 350px;
    width: 280px;
    overflow: hidden;
    background-color: rgba(255,255,255,1);
    border: 1px solid #e8f8ff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0,0,0,.05);
    transition: all .2s;
    margin: 30px 10px 0;}
.classiclist:hover{box-shadow: 0 5px 15px rgba(0,0,0,.3);}
.classiclist:hover .classiclist-h{background-color: rgba(225,19,19,.5);color: #fff;}
.classiclist-a{width: 100%;height: 100%;display: block;border-radius: 5px;overflow: hidden;position: relative;}
.classiclist-h{line-height: 50px;text-align: center;
    font-size: 16px;
    color: #6c7b8b;
    text-indent: 0;}
.classiclist-h img{height: 100%;max-height: 16px;padding-left:5px;}
.classiclist-img{overflow: hidden;height: 300px;transition: all .5s;}
.classiclist-img img{height: 300px;transition: all 1s ease-in-out;position: absolute;left: 0;top: 0; will-change: transform;}
.classiclist-img img:hover{height: 300px;position: absolute;left: 0;top: 0;transform: translate(-100%,0);margin-left: 100%;}

</style>
