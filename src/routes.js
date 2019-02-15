import index from "./components/index.vue";
import profile from "./components/profile.vue";
import tanxin from "./components/tanxin.vue";
import qiufenglan from "./components/qiufenglan.vue";
import news from "./components/news/news.vue";
import news1 from "./components/news/news1.vue";
import news2 from "./components/news/news2.vue";
import news3 from "./components/news/news3.vue";
import news4 from "./components/news/news4.vue";
import news5 from "./components/news/news5.vue";
import design from "./components/design.vue";
import web from "./components/web.vue";
import show from "./components/show.vue";
// import web from "./components/web.vue";
// import seo from "./components/seo.vue";
// import python from "./components/python.vue";
// import Program from "./components/Program.vue";
import data from "./components/data.vue";
import data_global from "./components/data_global.vue";
import data_3d from "./components/data_3d.vue";
import seo from "./components/seo.vue";
import he from "./components/HelloWorld.vue";

import mindex from "./components/app/mindex.vue";


export default [
  {path:'/',component:index,name: "index"},
  {path:'/mindex',component:mindex,name: "mindex"},
  {path:'/profile',component:profile,name: "profile"},
  {path:'/tanxin',component:tanxin,name: "tanxin"},
  {path:'/qiufenglan',component:qiufenglan,name: "qiufenglan"},
  {path:'/news',component:news,name: "news"},
  {path:'/news/news1',component:news1,name: "news1"},
  {path:'/news/news2',component:news2,name: "news2"},
  {path:'/news/news3',component:news3,name: "news3"},
  {path:'/news/news4',component:news4,name: "news4"},
  {path:'/news/news5',component:news5,name: "news5"},
  {path:'/design',component:design,name: "design"},
  {path:'/web',component:web,name: "web"},
  {path:'/data',component:data,name: "data"},
  {path:'/data_global',component:data_global,name: "data_global"},
  {path:'/data_3d',component:data_3d,name: "data_3d"},
  {path:'/he',component:he,name: "he"},
  {path:'/show',component:show,name: "show"},
  {path:'/seo',component:seo,name: "seo"},
  {path:'*',redirect:"/"}
]