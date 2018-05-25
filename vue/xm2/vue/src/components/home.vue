<template>
  <div class="home">
    <slider></slider>
    <list :list="list" :dataName="'home'"></list>
  </div>
</template>

<script>
// import list from "./list";
// import slider from "./slider";
const list =()=>import(/* webpackChunkName: "home" */ "./list.vue");
const slider =()=>import(/* webpackChunkName: "home" */ "./slider.vue");
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    list,
    slider
  },
  created() {
    // this.$store.dispatch('SHOW_LOADING');
    this.$http({
      url: "/static/data/index.data",
      // params:{start:1,count:2}
    }).then(
      res =>  {
        // setTimeout(()=>{
          this.list=res.data
          // this.$store.dispatch('HIDE_LOADING');
        // },1000);
      }
    )
  }
};
</script>

