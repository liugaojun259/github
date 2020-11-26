import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const indexRouters = [{
    path: "menu",
    name:"菜单管理",
    component: () => import("../page/menu/menu.vue")
  },
  {
    path: "role",
    name:"角色管理",
    component: () => import("../page/role/role.vue")
  },
  {
    path: "manage",
    name:"管理员管理",
    component: () => import("../page/manage/manage.vue")
  },
  {
    path: "cate",
    name:"商品分类",
    component: () => import("../page/cate/cate.vue")
  },
  {
    path: "specs",
    name:"商品规格",
    component: () => import("../page/specs/specs.vue")
  },
  {
    path: "goods",
    name:"商品管理",
    component: () => import("../page/goods/goods.vue")
  },
  {
    path: "member",
    name:"会员管理",
    component: () => import("../page/member/member.vue")
  },
  {
    path: "banner",
    name:"轮播图管理",
    component: () => import("../page/banner/banner.vue")
  },
  {
    path: "seckill",
    name:"秒杀活动",
    component: () => import("../page/seckill/seckill.vue")
  }
]

export default new Router({
  routes: [{
      path: "/login",
      component: () => import("../page/login/login.vue")
    },
    {
      path: "/",
      component: () => import("../page/index/index.vue"),
      children: [{
          path: "",
          component: () => import("../page/home/home")
        },
        ...indexRouters
      ]
    }
  ]
})
