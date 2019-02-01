<template>
  <div class="index">
<div id="banner">
  <div class="headcanvas" >
  <div class="line line1"></div>
  <div class="line line2"></div>
  <div class="line line3"></div>
  <div class="line line4"></div>
  <div class="line line5"></div>
  <div class="line line6"></div>
  <div class="line line7"></div>
  <div class="line line8"></div>
  <div class="line line9"></div>
  <div class="line line10"></div>
  <div class="line line11"></div>
  <div class="line line12"></div>
  <div class="line line13"></div>
  <div class="line line14"></div>
  <div class="line line15"></div>
  <div class="line line16"></div>
  <div class="line line17"></div>
  <div class="line line18"></div>
  <div class="line line19"></div>
  <div class="line line20"></div>
  <div class="line line21"></div>
  <div class="line line22"></div>
  <div class="line line23"></div>
  <div class="line line24"></div>
  <div class="line line25"></div>
  <div class="line line26"></div>
  <div class="line line27"></div>
  <div class="line line28"></div>
  <div class="line line29"></div>
  <div class="line line30"></div>  </div>  <h1 class="banner-h1" style="font-size: 0;">朱东东</h1>
  <h3 class="banner-h3" data-aos="fade-down" data-aos-duration="1500">腹有诗书气自华</h3>
  <h3 class="banner-h3"  data-aos="zoom-in-up" data-aos-duration="1500">你最大的危机就是对未来没有危机</h3>
  <div class="lianxi">
    <img src="../assets/weixin.jpg" alt="猪东东" style="width:4rem;height:4rem" data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="1500" data-aos-duration="1500">
    <!-- <div class="weixin" data-aos-easing="ease-out-back" data-aos="zoom-in-down" data-aos-delay="1500" data-aos-duration="1500"></div> -->
    <!-- <a class="qq" aos="zoom-in-up" target=blank href=tencent://message/?uin=429299291&Site=www.woyouli.com&Menu=yes></a> -->
    
    <span class="hero__scroll" aos="fade-up" aos-easing="ease" aos-delay="800">
        <i class="chevron bottom"></i>
      </span>
  </div>
</div>  

</div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  },
  methods:{

  },
  computed:{
    
  },
  mounted(){

/*百度统计*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d203c417657377868eabea2f9e0276c5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();  

}
}
</script>
<style scoped>
@media screen and (max-width: 801px) {.banner-h3{font-size: 1rem!important;}.headcanvas{transform: scale(0.2)!important;top: 20%!important}
.banner-h1{padding-top:70%!important }.hero__scroll{top:3%!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


/*header*/
.logo{background: url(../assets/logo2.png) 50% 50% no-repeat;height: 70px;width: 70px;transition: all 5s ease-in-out;transition-delay:.3s;}
.nav{transform: translateY(-70px);transition: all 1s;}

.banner-h1{text-align: center;font-size: 58px;line-height: 1.5;position: relative;padding-top: 26%;}
.banner-h1::before{content: "";width: 1px;height: 1px;background: #e11313;position: absolute;left: 55%;top: 15px;animation: dongdong linear 2s infinite;transform: translate(-50%, 0);margin-top: 22%;}
.banner-h1::after{content: "";width: 1px;height: 1px;background: #e11313;position: absolute;left: 45%;top: 15px;animation: dongdong1 linear 2s infinite;animation-delay:1s;transform:translate(-50%, 0);margin-top: 22%;}
@keyframes dongdong {
  0% {position: absolute;left: 45%;bottom: 5px;opacity:0;width: 1px;height: 1px; }
  50% {position: absolute;left: 50%;bottom: 5px;opacity:1;width:3px;height: 1px;}
  100%{position: absolute;left: 55%;bottom: 5px;opacity:0;width:1px;height: 1px;}
}
@keyframes dongdong1 {
  0% {position: absolute;left: 45%;bottom: 5px;opacity: 0;width: 1px;height: 1px;}
  50% {position: absolute;left: 50%;bottom: 5px;opacity: 1;width:3px;height: 1px;}
  100%{position: absolute;left: 55%;bottom: 5px;opacity: 0;width:1px;height: 1px;}
}

/*banner*/
#banner{width: 100%;height: 100vh;background: url(../assets/banner.jpg) 50% 50%;background-size: cover;}
.banner-h3{font-size: 30px;line-height: 50px;font-family:"ZoomlaXingtiJ6";    -moz-user-select: none; /*火狐*/ 
    -webkit-user-select: none; /*webkit浏览器*/ 
    -ms-user-select: none; /*IE10*/ 
    -khtml-user-select: none; /*早期浏览器*/ 
    user-select: none; }
/*联系qq微信*/
.lianxi{width: 250px;height: 50px;margin: 0 auto;display: flex;justify-content: space-around;padding-top: 50px;}
.weixin{width: 50px;height: 50px;background: url(../assets/weixin.jpg) ;background-size: cover;transition: all .5s;}

/*two*/
.two{position: relative;z-index: 2;height: 100vh;}
/* .canvas-h3{position: absolute;left: 50%;top: 20%;width: 480px;height: 89px;background: url(../assets/dong.png) 50% 50% no-repeat;transform: translate(-50% ,0);} */

/* .header:hover >.index .hero__scroll{top: -20%!important} */
/*下拉三角*/
.hero__scroll {
  position: absolute;
  bottom: 30px;
  width: 30px;
  margin: auto;
  display: block;
  /* cursor: pointer; */
  left: 50%;
  top:0%;
  transform: translate(-50%,0%);
  text-transform: uppercase; }
  .hero__scroll .chevron, .chevron{
    margin-top: 20px;
    display: block;
    -webkit-animation: pulse linear 2s infinite;
            animation: pulse linear 2s infinite;
    color: rgba(225,19,19,.8); }

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); }

  50% {
    -webkit-transform: translate(0, 10px);
            transform: translate(0, 10px); }

  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); } }

@keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); }

  50% {
    -webkit-transform: translate(0, 10px);
            transform: translate(0, 10px); }

  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); } }
.chevron::before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: '';
  display: inline-block;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
  vertical-align: top;
  width: 20px; }

.chevron.bottom:before {
  top: 0;
  -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
          transform: rotate(135deg); }
/*headcanvas*/
.line {
  margin-top: 30px;
  background-color: #31D2F7;
  height: 5px;
  position: absolute;
  animation: 🌀;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 300px;
  border-radius: 3px;
}

@keyframes 🌀 {
  0%   { 
    top: 0;
    transform: rotateZ(0deg);
    background-color: tomato;
  }
  25% { 
    top: 200px; 
    transform: rotateZ(90deg);
    background-color: mediumslateblue;
  }
  50% { 
    top: 0;
    transform: rotateZ(180deg);
    background-color: mediumspringgreen;
  }
  75% { 
    top: 200px;
    transform: rotateZ(270deg);
    background-color: mediumslateblue;
  }
  100% { 
    top: 0;
    transform: rotateZ(360deg);
    background-color: tomato;
  }
}

.line1 {
  animation-delay: 100ms;
  width: 300px;
}
.line2 {
  animation-delay: 200ms;

}
.line3 {
  animation-delay: 300ms;

}
.line4 {
  animation-delay: 400ms;

}
.line5 {
  animation-delay: 500ms;

}
.line6 {
  animation-delay: 600ms;

}
.line7 {
  animation-delay: 700ms;

}
.line8 {
  animation-delay: 800ms;

}
.line9 {
  animation-delay: 900ms;

}

.line10 {
  animation-delay: 1000ms;

}

.line11 {
  animation-delay: 1100ms;

}
.line12 {
  animation-delay: 1200ms;

}
.line13 {
  animation-delay: 1300ms;

}
.line14 {
  animation-delay: 1400ms;

}
.line15 {
  animation-delay: 1500ms;
}
.line16 {
  animation-delay: 1600ms;
}
.line17 {
  animation-delay: 1700ms;
}
.line18 {
  animation-delay: 1800ms;
}
.line19 {
  animation-delay: 1900ms;
}
.line20 {
  animation-delay: 2000ms;
}
.line21 {
  animation-delay: 2100ms;
}
.line22 {
  animation-delay: 2200ms;
}
.line23 {
  animation-delay: 2300ms;
}
.line24 {
  animation-delay: 2400ms;
}
.line25 {
  animation-delay: 2500ms;
}
.line26 {
  animation-delay: 2600ms;
}
.line27 {
  animation-delay: 2700ms;
}
.line28 {
  animation-delay: 2800ms;
}
.line29 {
  animation-delay: 2900ms;
}
.line30 {
  animation-delay: 3000ms;
}
.headcanvas{position: absolute;top: 15%; width: 100%;transform: scale(0.5);display: flex;justify-content: center;z-index: 100;align-items: flex-start;}
</style>
