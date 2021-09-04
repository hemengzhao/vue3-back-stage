import { createStore } from 'vuex'

import lodVuex from './modules/olaVuex'
export default createStore({
  state: {
    // tagsList: [],
    // collapse: false
  },
  mutations: {
    // delTagsItem(state, data) {
    //     state
    //         .tagsList
    //         .splice(data.index, 1);
    // },
    // setTagsItem(state: any, data: any) {
    //     state
    //         .tagsList
    //         .push(data)
    // },
    // clearTags(state) {
    //     state.tagsList = []
    // },
    // closeTagsOther(state, data) {
    //     state.tagsList = data;
    // },
    // closeCurrentTag(state: any, data: any) {
    //     for (let i = 0, len = state.tagsList.length; i < len; i++) {
    //         const item: any = state.tagsList[i];
    //         if (item.path === data.$route.fullPath) {
    //             if (i < len - 1) {
    //                 data
    //                     .$router
    //                     .push(state.tagsList[i + 1].path);
    //             } else if (i > 0) {
    //                 data
    //                     .$router
    //                     .push(state.tagsList[i - 1].path);
    //             } else {
    //                 data
    //                     .$router
    //                     .push("/");
    //             }
    //             state
    //                 .tagsList
    //                 .splice(i, 1);
    //             break;
    //         }
    //     }
    // },
    // // 侧边栏折叠
    // handleCollapse(state, data) {
    //     state.collapse = data;
    // }
},
  actions: {
  },
  modules: {
    lodVuex
  }
})
