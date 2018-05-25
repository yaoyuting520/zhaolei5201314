<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <navbar v-show="bNav"></navbar>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footbar from './components/footbar'
// const navbar =()=>import(/* webpackChunkName: "group-home" */ "./components/navbar.vue");
// const footbar =()=>import(/* webpackChunkName: "group-home" */ "./components/footbar.vue");
import { mapGetters} from 'vuex';
export default {
  name: 'App',
  components:{
    navbar,footbar
  },
  computed:mapGetters([
    'bLoading','bNav','bFoot'
  ]),
  watch:{
    // data的数据名(){数据变化，函数就会调用}
    $route:function(newValue,oldValue){
      let path = newValue.path;
      console.log(path);
      if(/home|follow|column/.test(path)){
        this.$store.dispatch('SHOW_NAV');
        this.$store.dispatch('SHOW_FOOT');
      }
      if(/login|reg|detail/.test(path)){
        this.$store.dispatch('HIDE_NAV');
        this.$store.dispatch('HIDE_FOOT');
      }
      if(/user/.test(path)){
        this.$store.dispatch('HIDE_NAV');
        this.$store.dispatch('SHOW_FOOT');
      }
    }
  }
}
</script>

<style>

</style>
