import { routes } from "@/router";

const mapFn = (arr: any[], path?: string) => {
   return arr.filter((val: any) => {
        val.path = path ? path + '/' + val.path : val.path;
       if(val.children){
            val.children = mapFn(val.children, val.path );
       }
       
       return val?.meta?.isLeaf;
   })
}
const state = {
    sidebarRouter: mapFn([...routes].filter(val => val.name == 'Home')[0].children || []), // 菜单展示

}

const getters = {

}

const mutations = {
   
}
const actions = {

}
export default {
    state,
    mutations,
    actions,
    getters,

}