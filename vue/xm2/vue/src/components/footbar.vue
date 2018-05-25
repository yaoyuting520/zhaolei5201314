<template>
  <div class="foot-btn" >
    <ul id="ul">
      <router-link class="home" tag="li" to="/home" active-class="home1"><a href="javascript:;" ></a></router-link>
      <router-link class="write" tag="li" to="/follow" active-class="write1"><a href="javascript:;" ></a></router-link>
      <router-link class="my" tag="li" to="/user" active-class="my1"><a href="javascript:;" ></a></router-link>
      <!-- <li class="home1"><a href="index_m.html"></a></li>
      <li class="write"><a href="javascript:;"></a></li>
      <li class="my"><a href="mydoc_m.html"></a></li> -->
    </ul>
  </div>
</template>
<style scoped>
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}

.foot-btn  .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home1.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
.foot-btn  .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write1.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
.foot-btn  .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}

.foot-btn #ul li.home1{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
.foot-btn #ul li.write1{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
.foot-btn #ul li.my1{width:0.39rem;height:0.63rem; background:url(../assets/img/my1.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}

</style>
