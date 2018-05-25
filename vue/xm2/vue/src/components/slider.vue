<template>
  <!-- <div class="banner">
    <ul class="clearfix">
      <li><img src="../assets/images/img_1.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房11111</h2>
          <p>刘德华11 / 文</p>
        </div>
      </li>
      <li><img src="../assets/images/img_2.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房2222</h2>
          <p>刘德华22 / 文</p>
        </div>
      </li>
      <li><img src="../assets/images/img_3.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房333</h2>
          <p>刘德华33 / 文</p>
        </div>
      </li>
      <li><img src="../assets/images/img_1.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房11111</h2>
          <p>刘德华11 / 文</p>
        </div>
      </li>
    </ul>

  </div> -->
  <swipe class="my-swipe" :speed="100" :auto="1000">
    <swipe-item class="slide1">1</swipe-item>
    <swipe-item class="slide2">2</swipe-item>
    <swipe-item class="slide3">3</swipe-item>
  </swipe>
</template>
<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
    swipe:Swipe,
    'swipe-item':SwipeItem
  }
};
</script>

<style>
/* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;} */

.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
  height: 200px;
  line-height: 200px;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
  height: 200px;
  line-height: 200px;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
  height: 200px;
  line-height: 200px;
}
</style>
