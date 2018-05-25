<template>

  <list :list="list" :dataName="'follow'"></list>

</template>
<script>
import list from './list'
export default {
  data() {
    return {
      list: []
    };
  },
  components:{
    list
  },
  created() {
    console.log('follow');
    this.$http({
      url: "/static/data/follow.data",
      // params:{start:1,count:2}
    }).then(
      res =>  this.list=res.data
    )
  }
}
</script>

<style>
.newsList {
  clear: both;
  margin-bottom: 1rem;
  margin-top: 0.7rem;
}
</style>