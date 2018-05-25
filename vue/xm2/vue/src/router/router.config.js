// import home from '../components/home.vue';
// import user from '../components/user.vue';
// import error from '../components/error.vue';
// import login from '../components/login.vue';
// import reg from '../components/reg.vue';
// import detail from '../components/detail.vue';
// import column from '../components/column.vue';
// import follow from '../components/follow.vue';
import node from '../components/node.vue';


// const follow =()=>import(/* webpackChunkName: "follow" */ "../components/follow.vue");
const home =()=>import(/* webpackChunkName: "home" */ "../components/home.vue");//import 导入 需要安装 babel-plugin-syntax-dynamic-import ,配置 babelrc  "plugins": ["syntax-dynamic-import"]
const follow =()=>import(/* webpackChunkName: "follow" */ "../components/follow.vue");
const user =()=>import(/* webpackChunkName: "user" */ "../components/user.vue");
const error =()=>import(/* webpackChunkName: "error" */ "../components/error.vue");
const login =()=>import(/* webpackChunkName: "login" */ "../components/login.vue");
const reg =()=>import(/* webpackChunkName: "reg" */ "../components/reg.vue");
const detail =()=>import(/* webpackChunkName: "detail" */ "../components/detail.vue");
const column =()=>import(/* webpackChunkName: "column" */ "../components/column.vue");

let routes=[
  {path:'/home',component:home},
  {path:'/follow',component:follow},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/column',component:column},
  {path:'/detail/:id',component:detail},
  {path:'/node',component: node},
  {path:'/',redirect: '/home'},
  {path:'*',component:error}
]



// export default routes;
export default {routes}