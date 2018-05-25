import Vue from 'vue';
import axios from 'axios';
export default {
  SHOW_NAV:({commit,state})=>{
    commit('SHOW_NAV')
  },
  HIDE_NAV:({commit,state})=>{
    commit('HIDE_NAV')
  },
  SHOW_FOOT:({commit,state})=>{
    commit('SHOW_FOOT')
  },
  HIDE_FOOT:({commit,state})=>{
    commit('HIDE_FOOT')
  },
  SHOW_LOADING:({commit,state})=>{
    commit('SHOW_LOADING')
  },
  HIDE_LOADING:({commit,state})=>{
    commit('HIDE_LOADING')
  },
  ASYNC_ARTICLE:({commit,state})=>{
    // axios().... -> commit()
    axios({
      url:'http://localhost:3000/article'
    }).then(
      res => console.log(res)
    )
  }
};