import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login/index.vue"
const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      icon: ''
  },
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
          path: "/dashboard",
          name: "dashboard",
          meta: {
              title: '系统首页',
              icon: "el-icon-house",
          },
          component: () => import ( /* webpackChunkName: "dashboard" */ "../views/oldPage/Dashboard.vue")
      }, {
          path: "/table",
          name: "basetable",
          meta: {
              title: '基础表格',
              icon: "el-icon-document", 
          },
          component: () => import ( /* webpackChunkName: "table" */ "../views/oldPage/BaseTable.vue")
      }, {
          path: "/charts",
          name: "basecharts",
          meta: {
              title: 'schart图表',
              icon: "el-icon-pie-chart",
          },
          component: () => import ( /* webpackChunkName: "charts" */ "../views/oldPage/BaseCharts.vue")
      }, {
          path: "/form",
          name: "baseform",
          meta: {
              title: '表单相关',
              icon: "el-icon-tickets",
          },
          component: () => import ( /* webpackChunkName: "form" */ "../views/oldPage/BaseForm.vue")
      }, {
          path: "/tabs",
          name: "tabs",
          meta: {
              title: 'tab选项卡',
              icon: "el-icon-document-copy",
          },
          component: () => import ( /* webpackChunkName: "tabs" */ "../views/oldPage/Tabs.vue")
      }, {
          path: "/donate",
          name: "donate",
          meta: {
              title: '鼓励作者'
          },
          component: () => import ( /* webpackChunkName: "donate" */ "../views/oldPage/Donate.vue")
      }, {
          path: "/permission",
          name: "permission",
          meta: {
              title: '权限管理',
              permission: true
          },
          component: () => import ( /* webpackChunkName: "permission" */ "../views/oldPage/Permission.vue")
      }, {
          path: "/i18n",
          name: "i18n",
          meta: {
              title: '国际化语言'
          },
          component: () => import ( /* webpackChunkName: "i18n" */ "../views/oldPage/I18n.vue")
      }, {
          path: "/upload",
          name: "upload",
          meta: {
              title: '上传插件'
          },
          component: () => import ( /* webpackChunkName: "upload" */ "../views/oldPage/Upload.vue")
      }, {
          path: "/icon",
          name: "icon",
          meta: {
              title: '自定义图标'
          },
          component: () => import ( /* webpackChunkName: "icon" */ "../views/oldPage/Icon.vue")
      }, {
          path: '/404',
          name: '404',
          meta: {
              title: '找不到页面'
          },
          component: () => import (/* webpackChunkName: "404" */ '../views/oldPage/404.vue')
      }, {
          path: '/403',
          name: '403',
          meta: {
              title: '没有权限'
          },
          component: () => import (/* webpackChunkName: "403" */ '../views/oldPage/403.vue')
      }, {
          path: '/user',
          name: 'user',
          meta: {
              title: '个人中心'
          },
          component: () => import (/* webpackChunkName: "user" */ '../views/oldPage/User.vue')
      }
  ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export {
  router,
  routes
} 
