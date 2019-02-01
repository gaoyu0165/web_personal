<template>
  <div class="news">
<div id="header">
  <h2 class="header-h">天方夜谭</h2>
    <p class="header-p">—大家都这么忙，别整那些没用的</p>
</div>
  <div id="main">
    <dl class="classiclist">
     <router-link to="" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic6.jpg" alt="朱东东当你扛不住的时候"></dd>
      <dt class="classiclist-h">别动我...</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news/news4" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/172347349686.gif" alt="别乱买了，面膜真正的作用就这一个"></dd>
      <dt class="classiclist-h">别乱买了，面膜真正的作用就这一个<img src="../../assets/gif1.gif"></dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news/news2" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic19.jpg" alt="东BAT公司内部岗位级别和薪资结构"></dd>
      <dt class="classiclist-h">BAT公司内部岗位级别和薪资结构<img src="../../assets/hot.gif"></dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news/news5" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/1231.jpg" alt="你看不懂的眼镜"></dd>
      <dt class="classiclist-h">你看不懂的眼镜<img src="../../assets/gif1.gif"></dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news/news3" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic26.jpg" alt="一个小格子一天500万"></dd>
      <dt class="classiclist-h">一个小格子一天500万<img src="../../assets/gif1.gif"></dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news/news1" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic9.gif" alt="2019UI设计趋势"></dd>
      <dt class="classiclist-h">2019UI设计趋势</dt>
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
@media screen and (max-width: 801px) {
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column }

} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 

#main{width: 90%;height: 100%;display: flex;margin: 0 auto;justify-content: center;flex-wrap: wrap;padding-bottom: 50px}
.classiclist{height: 350px;
    width: 262px;
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
