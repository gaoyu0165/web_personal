<template>
  <div class="header">
    <router-link to="/"><div class="logo"></div></router-link>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav"
      mode="horizontal"
      text-color="#fff"
      background-color="rgba(0,0,0,.3)"
      active-text-color=" rgba(225, 19, 19, 0.8)"
      @select="handleSelect">
      <el-submenu index="1" class="active">
        <template slot="title" class="dongdong">东东简介</template>
        <router-link to="/profile"><el-menu-item index="1-1">个人信息</el-menu-item></router-link>
        <router-link to="/news"><el-menu-item index="1-2">天方夜谭</el-menu-item></router-link>
        <router-link ><el-menu-item index="1-3" disabled>暂无信息</el-menu-item></router-link>
      </el-submenu>      
      <el-submenu index="2" class="active">
        <template slot="title">东东技术</template>
        <router-link to="/design"><el-menu-item index="2-1">UI design</el-menu-item></router-link>
        <router-link to="/web"><el-menu-item index="2-2">前端开发</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="2-3" disabled>小程序</el-menu-item></router-link>
        <router-link to="/seo"><el-menu-item index="2-4">SEO</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="2-5" disabled>python</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="3" class="active tree">
        <template slot="title">大数据展</template>
        <router-link to="/data"><el-menu-item index="3-1">大数据展示</el-menu-item></router-link>
        <router-link to="/data_global"><el-menu-item index="3-2">大数据 + 地图</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="3-3" disabled>3D大数据展示</el-menu-item></router-link>
      </el-submenu>         
      <el-submenu index="4" class="active">
        <template slot="title" class="active">4K高清</template>
        <router-link to="/show"><el-menu-item index="4-1">4K高清</el-menu-item></router-link>
      </el-submenu>         
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "v_header",
  data() {
    return {
      msg: "header",
      activeIndex:"0"
    };
  },
  methods:{
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }  ,
  }
};
</script>
<style scoped>
@media screen and (max-width: 801px) {.logo{width:1.5rem!important;height: 1.5rem!important; background-size: contain!important;margin: .5rem 0 0 .2rem;};
.nav li a {line-height:2.5rem!important;}
.nav{padding-left: 9%!important}
/* #app .nav{padding-left:2rem;  background-color: rgba(225, 190, 190, 0.8)!important;}.el-menu--popup a .el-menu-item{border-bottom: none;background-color: rgba(225, 190, 190, 0.8)!important} */
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


.header{width: 100%;height: 3.75rem;position: fixed;z-index: 98;overflow: hidden;}
.nav{transform: translateY(-3.75rem);transition: all 1s;padding-left: 5%;z-index: 99;background-color: rgba(0,0,0,.4)!important;}
.header:hover .nav{display: block;transform: translateY(0)}
/*nav*/
.nav > li {
  float: left;
  position: relative;
  height: 3.75rem;
}
#app .nav > li>.el-submenu__title {
  height: 3.75rem;
}
/* 圣诞树 */
.tree{
  background: url(../assets/active_03.png) no-repeat 97% top;background-size: 15px;
}
.tree:hover{background: url(../assets/active_03.png) no-repeat 97% bottom;background-size: 15px;}
.active::after {
  content: "";
  width: 0px;
  height: 1px;
  z-index: 93;
  background: rgba(52, 168, 83,1);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,0);
  transition: all 0.5s;
}
.active:hover::after {
  width:100%;
  left: 50%;
}
.nav li a {
  font-size: 16px;
  line-height: 3.75rem;
  font-weight: 500;
  display: block;
}

.sub_nav {
  width: 100px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  border-radius: 0 0 8px 8px;
  position: absolute;
  left: 50%;
  top: 3.75rem;
  overflow: hidden;
  display: none;
  transform: translate(-50%, 0);
}
.nav li{background-color: rgba(#255, #255, #255, 0)}
.nav li:hover{background-color: rgba(#255, #000, #000,.9)}
/* 导航栏下 */
.el-menu--popup a .el-menu-item{
  border-top: 1px rgba(0, 0, 0, 0.1) dotted;
  border-bottom: 1px rgba(0, 0, 0, 0.1) dotted;
  text-align: center;
  /* background-color: rgba(255, 255, 255, 0); */
}
.el-menu--popup a .el-menu-item:hover{
  background-color: rgba(225, 19, 19, 0.8);
  color: rgba(225, 19, 19, 0.8);
}
/* logo */
.logo{background: url(../assets/logo.png) 50% 50% no-repeat;height: 3.75rem;width:3.75rem;transition: all 5s ease-in-out;transition-delay:.3s;position: absolute;z-index: 1000;}
.header:hover .logo{transform:rotate(30deg);}
/* 去掉单个菜单的对不齐问题 */
.el-menu--horizontal>.el-menu-item{border-bottom: none;background-color: rgba(0, 0, 0, .3)!important}
.active{background-color: rgba(0,0,0,0)!important;}
.el-submenu__title{background-color: rgba(0,0,0,0)!important;}
.active:hover{background-color: rgba(225, 19, 19, 0.5)!important; }
.el-menu-item:hover{background-color: rgba(225, 19, 19, 0.5)!important;color: #000!important }
/* .active:hover .el-submenu__title{color: #fff!important } */
/* .el-menu--horizontal>.el-submenu:hover .el-submenu-title{color: #fff} */

</style>
