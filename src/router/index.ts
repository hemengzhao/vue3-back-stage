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
        icon: '',
    },
    component: Login
  },
  {
    path: '/403',
    name: '403',
    meta: {
        title: '没有权限',
        isLeaf: false,
    },
    component: () => import (/* webpackChunkName: "403" */ '../views/oldPage/403.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: '',
        isLeaf: true,
    },
    children: [
      {
          path: "/dashboard",
          name: "dashboard",
          meta: {
              title: '系统首页',
              icon: "el-icon-house",
              isLeaf: true,
          },
          component: () => import ( /* webpackChunkName: "dashboard" */ "../views/oldPage/Dashboard.vue")
      }, {
          path: "/table",
          name: "basetable",
          meta: {
              title: '基础表格',
              icon: "el-icon-document", 
              isLeaf: true,
          },
          component: () => import ( /* webpackChunkName: "table" */ "../views/oldPage/BaseTable.vue")
      }, {
            path: "/ppt",
            name: "PPT",
            meta: {
                title: 'PPT制作',
                icon: "el-icon-document", 
                isLeaf: true,
            },
            component: () => import ( /* webpackChunkName: "table" */ "../views/PPTist/index.vue")
        }, {
          path: "/tabs",
          name: "tabs",
          meta: {
              title: 'tab选项卡',
              icon: "el-icon-document-copy",
              isLeaf: true,
          },
          component: () => import ( /* webpackChunkName: "tabs" */ "../views/oldPage/Tabs.vue")
      }, {
        path: "/form",
        name: "baseform",
        meta: {
            title: '表单相关',
            icon: "el-icon-tickets",
            isLeaf: true,
        },
        component: () => import ( /* webpackChunkName: "form" */ "../views/oldPage/FromLay.vue"),
        children: [
          {
            path: "baseform",
            name: "baseform",
            meta: {
                title: '基础表单',
                icon: "el-icon-tickets",
                isLeaf: true,
            },
            component: () => import ( /* webpackChunkName: "form" */ "../views/oldPage/BaseForm.vue"),
            
          }, {
              path: "upload",
              name: "upload",
              meta: {
                  title: '文件上传',
                  isLeaf: true,
              },
              component: () => import ( /* webpackChunkName: "upload" */ "../views/oldPage/Upload.vue")
          }

        ]
      }, {
          path: "/charts",
          name: "basecharts",
          meta: {
              title: 'schart图表',
              icon: "el-icon-pie-chart",
              isLeaf: true,
          },
          component: () => import ( /* webpackChunkName: "charts" */ "../views/oldPage/BaseCharts.vue")
      }, {
          path: "/icon",
          name: "icon",
          meta: {
              title: '自定义图标',
              isLeaf: true,
              icon: "el-icon-eleme",
          },
          component: () => import ( /* webpackChunkName: "icon" */ "../views/oldPage/Icon.vue")
      }, {
          path: "/i18n",
          name: "i18n",
          meta: {
              title: '国际化语言',
              isLeaf: true,
              icon: "el-icon-orange",
          },
          component: () => import ( /* webpackChunkName: "i18n" */ "../views/oldPage/I18n.vue")
      }, {
          path: "/donate",
          name: "donate",
          meta: {
              title: '鼓励作者',
              isLeaf: true,
              icon: "el-icon-sunrise",
          },
          component: () => import ( /* webpackChunkName: "donate" */ "../views/oldPage/Donate.vue")
      }, {
          path: "/error",
          name: "error",
          meta: {
              title: '权限管理',
              isLeaf: true,
              icon: "el-icon-warning",
          },
          component: () => import ( /* webpackChunkName: "permission" */ "../views/oldPage/ErrorLay.vue"),
          children: [
            {
                path: "permission",
                name: "permission",
                meta: {
                    title: '权限测试',
                    isLeaf: true
                },
                component: () => import ( /* webpackChunkName: "permission" */ "../views/oldPage/Permission.vue")
            }, {
                  path: '404',
                  name: '404',
                  meta: {
                      title: '找不到页面',
                      isLeaf: true,
                  },
                  component: () => import (/* webpackChunkName: "404" */ '../views/oldPage/404.vue')
              },
          ]
        }, {
          path: '/user',
          name: 'user',
          meta: {
              title: '个人中心',
              isLeaf: false,
          },
          component: () => import (/* webpackChunkName: "user" */ '../views/oldPage/User.vue')
        }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export {
  router,
  routes
} 
