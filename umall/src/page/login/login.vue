<template>
  <div class="login">
    <div class="box">
      <h3 class="center marginBottom">登录</h3>
      <div class="marginBottom">
        <el-input placeholder="请输入用户名"></el-input>
      </div>
      <div class="marginBottom">
        <el-input placeholder="请输入密码"></el-input>
      </div>
      <div class="center">
        <el-button type="primary">登录</el-button>
      </div>
    </div>
  </div>
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
.login{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right,rgb(74,41,55),rgb(37,51,85));
  position: relative;
}
.box{
  width: 400px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: white;
  border-radius: 10px;
}
.center{
  text-align: center;
}
.marginBottom{
  margin-bottom: 20px;
}
</style>
