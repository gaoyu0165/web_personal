<template>
  <div class="header">
    <router-link to="/"><div class="logo"></div></router-link>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav"
      mode="horizontal"
      text-color="#fff"
      background-color="rgba(150,150,150,.1)"
      active-text-color=" rgba(225, 19, 19, 0.8)"
      @select="handleSelect">
      <el-submenu index="1" class="active">
        <template slot="title" class="dongdong">东东简介</template>
        <router-link to="/profile"><el-menu-item index="1-1">个人信息</el-menu-item></router-link>
        <router-link to="/news"><el-menu-item index="1-2">科技爆料</el-menu-item></router-link>
        <router-link to="/profile"><el-menu-item index="1-3" disabled>暂无信息</el-menu-item></router-link>
      </el-submenu>      
      <el-submenu index="2" class="active">
        <template slot="title">东东技术</template>
        <router-link to="/design"><el-menu-item index="2-1">UI design</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="2-2" disabled>前端开发</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="2-3" disabled>SEO</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="2-4" disabled>python</el-menu-item></router-link>
        <router-link to=""><el-menu-item index="2-3" disabled>小程序</el-menu-item></router-link>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="3" class="active">
        <template slot="title">大数据展</template>
        <el-menu-item index="3-1"><router-link to="/data">大数据展示</router-link></el-menu-item>
        <el-menu-item index="3-2" disabled><router-link to="/profile">大数据 + 地图</router-link></el-menu-item>
        <el-menu-item index="3-3" disabled><router-link to="/profile">3D大数据展示</router-link></el-menu-item>
      </el-submenu>         
      <el-menu-item index="4" class="active tree"><router-link to="/show">高清壁纸</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "vheader",
  data() {
    return {
      msg: "header",
      activeIndex:"0"
    };
  },
  methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }  ,
  }
};
</script>
<style scoped>
.header{width: 100%;height: 60px;position: fixed;z-index: 99;}
.nav{transform: translateY(-60px);transition: all 1s;padding-left: 5%;z-index: 99;}
.header:hover .nav{display: block;transform: translateY(0)}
/*nav*/
.nav > li {
  float: left;
  position: relative;
  height: 60px;
}
#app .nav > li>.el-submenu__title {
  height: 60px;
}
/* 圣诞树 */
.tree{
  background: url(../assets/active_03.png) no-repeat right top;
}
.tree:hover{background: url(../assets/active_03.png) no-repeat right bottom;}
.active::after {
  content: "";
  width: 0px;
  height: 1px;
  background: rgba(225, 19, 19, 0.8);
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
  line-height: 60px;
  font-weight: 500;
  display: block;
}

.sub_nav {
  width: 100px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  border-radius: 0 0 8px 8px;
  position: absolute;
  left: 50%;
  top: 60px;
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
.logo{background: url(../assets/logo.png) 50% 50% no-repeat;height: 60px;width: 60px;transition: all 5s ease-in-out;transition-delay:.3s;position: absolute;z-index: 1000;}
.header:hover .logo{transform:rotate(30deg);}
/* 去掉单个菜单的对不齐问题 */
.el-menu--horizontal>.el-menu-item{border-bottom: none;background-color: rgba(red, green, blue, .1)}
.active{background-color: rgba(0,0,0,0)!important;}
.el-submenu__title{background-color: rgba(0,0,0,0)!important;}
.active:hover{background-color: rgba(225, 19, 19, 0.1)!important; }
.el-menu-item:hover{background-color: rgba(225, 19, 19, 0.1)!important;color: #000!important }
/* .active:hover .el-submenu__title{color: #fff!important } */
/* .el-menu--horizontal>.el-submenu:hover .el-submenu-title{color: #fff} */
</style>
