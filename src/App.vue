<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>
import Vheader from "./components/header";
export default {
  name: 'App',
  components: {
    Vheader
  },
}
</script>

<style >
@media screen and (max-width: 801px) {
.el-menu--popup{padding: 0!important}
#header{height: 3.6rem!important;}.header-h{padding-top: 1rem!important;}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
/* 标题字大小 */
.header-h img{width:27%!important;margin: 0 auto;vertical-align:middle} 
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column }
.header .el-submenu__title{height: 100%!important;line-height: 2.2rem!important;}
/* 导航字体大小 */
.el-submenu__title{font-size: .8rem}
.el-menu--horizontal .el-menu--popup{min-width: 4rem!important;}
/* 下拉出来的小导航条 */
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .9rem}
#app p{font-size: 1rem!important;font-size: 1rem}
.tree{background: none!important}
/* profile 的走马灯的手机高度 */
.el-carousel__container{height: 6.2rem!important;}

} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 1377px) {
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left:.5rem!important;}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .9rem}
.el-carousel__container{height: 21rem!important;}
}@media screen and (max-width: 1011px) {
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-carousel__container{height: 6rem!important;}
.el-menu--popup{padding: 0!important}
.el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .9rem}
.header-h img{width:20%!important;margin: 0 auto;vertical-align:middle}
}
@media screen and (max-width: 375px) {
/* profile 的走马灯的手机高度 */
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-menu--popup{padding: 0!important}
.el-carousel__container{height: 5.5rem!important;}
.el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .9rem}
.header-h img{width:20%!important;margin: 0 auto;vertical-align:middle}
}
@media screen and (max-width: 325px) {
/* profile 的走马灯的手机高度 */
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-menu--popup{padding: 0!important}
.el-carousel__container{height: 4.7rem!important;}
.el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .9rem}
.header-h img{width:30%!important;margin: 0 auto;vertical-align:middle}
}

body{background-image: url(assets/shadow-footer.png);width: 100%;height: 100%;}
/* 导航栏hover下面的宽度 */
.el-menu--horizontal .el-menu--popup{min-width:115px;text-align: center;}
.active{background-color: rgba(0,0,0,0)!important;}
.el-submenu__title{background-color: rgba(0,0,0,0)!important;}
#header{height: 15rem;background: url(assets/banner3.jpg);background-attachment:fixed;background-size: contain}
.header-h{padding-top: 6rem;}
/* 导航下拉小图标 */
.el-submenu__title i{color:rgba(0, 0, 0, .3)!important}
.el-submenu__title:hover i{color:rgba(255, 255, 255,.7)!important}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left:.2rem!important;}
  
/*hover*/
       abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
           margin: 0;
           padding: 0;
           cursor: url('https://lh3.googleusercontent.com/Qxf09ahLbsbe3MEmK1v57EpTUHyZWWXsbh5equM3i6Enw89V_KrYCquRkT_conJFJHoZ7exSFh66Fe6G6OSHuQuy1S6KW2Qxq2HRKB78YADKD6nAMkQlOXnNhCS8sHney-nfNXoemdKJVDkqvaTGwp8dvFmfZnOSS6vIWSkRGD_kMK7wBRy1q4WlCoL_tlOUrlI59V9H0bTaFlXKQ9-7eOfOMG01JdRT4fzEH3dFTcfG0hqU7m9Tm5ov0vus127x0VZ72cqeU74EWjrNet042CA97JYETMrB1tqIPhPPdQRR-4sooOSvXKeQq3whtHT4LbvGN4p_CqH4Qax-eQ6ePj80U0cODrz8umk8Yg9gOByOWMypZLiFjQASi3CymRz7UFIZVLg02PojqP7qsxCv-GLGtOBRlluk4Q64YbRGyHOtW0_F6rSMeAQQ2zIVhszBXuhepszaUlLMxxc_1qH_gi-JG-ffFdy8d9vF1l3Qzv4LlgIYJXw3Pov9z_Bwl-Mv0mUxU7iNK_jN_82DNtOAImxuerEmv_iCr82ETWwFkf-XYEVMeyrIWtz5_zXzNq2r71pkDQSNF9X2--RgOZRuWQnSziWOi1Q0SBON2dUikZRJy-CBLGLAH-_h4J0jkqMxNFrzDnonLgvzzQcqf6TdurE=w22-h28-no'),auto;
       }

h1,h2,h3,h4,h5,h6{font-weight:normal;line-height: 1.3;text-align: center}
#app p{font-size: 1.1rem}
/* @font-face {
  font-family: 'hysz';
  src: url('./fonts/HYSuZeLiXingKaiTruingF-2.eot');
  src:
    url('./fonts/HYSuZeLiXingKaiTruingF-2.eot?#') format('embedded-opentype'),
    url('./fonts/HYSuZeLiXingKaiTruingF-2.woff') format('woff'),
    url('./fonts/HYSuZeLiXingKaiTruingF-2.ttf') format('truetype'),
    url('./fonts/HYSuZeLiXingKaiTruingF-2.svg') format('svg');
} */

@media screen and (max-width: 801px) {
  .el-submenu__title{padding: 0!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


/* 默认css */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font: inherit;
  text-decoration: none;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>
