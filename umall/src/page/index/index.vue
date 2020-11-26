<template>
  <el-container class="index">
    <el-aside width="200px" class="left">
      <!-- 左侧导航 -->
      <!-- 
        background-color 背景颜色
        text-color  文字颜色
        active-text-color  选中的那一个颜色
        unique-opened  只保持一个打开
        router 开启路由模式
       -->
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="rgb(21,23,31)" text-color="#fff"
        router unique-opened active-text-color="#ffd04b">
        <!-- 首页 -->
        <el-menu-item index="/">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </el-menu-item>
        <!-- 系统设置 -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/menu">
              <span>菜单管理</span>
            </el-menu-item>
            <el-menu-item index="/role">
              <span>角色管理</span>
            </el-menu-item>
            <el-menu-item index="/manage">
              <span>管理员管理</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 商城管理 -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>商城管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/cate">
              <span>商品分类</span>
            </el-menu-item>
            <el-menu-item index="/specs">
              <span>商品规格</span>
            </el-menu-item>
            <el-menu-item index="/goods">
              <span>商品管理</span>
            </el-menu-item>
            <el-menu-item index="/member">
              <span>会员管理</span>
            </el-menu-item>
            <el-menu-item index="/banner">
              <span>轮播图管理</span>
            </el-menu-item>
            <el-menu-item index="/seckill">
              <span>秒杀活动</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 二级路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    props: [],
    components: {},
    data() {
      return {};
    },
    computed: {
      ...mapGetters({}),
    },
    methods: {
      ...mapActions({}),
    },
    mounted() {},
  };

</script>
<style scoped>
  .index {
    height: 100vh;
  }

  .left {
    height: 100vh;
    background-color: rgb(21, 23, 31)
  }

  .header {
    height: 100px;
    background: rgb(181, 194, 211);
  }

</style>
