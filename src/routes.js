import index from "./components/index.vue";
import profile from "./components/profile.vue";
import news from "./components/news/news.vue";
import news1 from "./components/news/news1.vue";
import news2 from "./components/news/news2.vue";
import news3 from "./components/news/news3.vue";
import design from "./components/design.vue";
import show from "./components/show.vue";
// import web from "./components/web.vue";
// import seo from "./components/seo.vue";
// import python from "./components/python.vue";
// import Program from "./components/Program.vue";
import data from "./components/data.vue";
import he from "./components/HelloWorld.vue";


export default [
  {path:'/',component:index,name: "index"},
  {path:'/profile',component:profile,name: "profile"},
  {path:'/news',component:news,name: "news"},
  {path:'/news/news1',component:news1,name: "news1"},
  {path:'/news/news2',component:news2,name: "news2"},
  {path:'/news/news3',component:news3,name: "news3"},
  {path:'/design',component:design,name: "design"},
  {path:'/data',component:data,name: "data"},
  {path:'/he',component:he,name: "he"},
  {path:'/show',component:show,name: "show"},
  {path:'*',redirect:"/"}
]