<template>
  <div>
    <el-dialog :title="info.isAdd?'添加菜单':'修改菜单'" :visible.sync="info.isShow">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="菜单名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-select v-model="form.pid" placeholder="请选择上级菜单" @change="changePid">
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 这里需要再次改变 -->
            <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-radio :label="1" v-model="form.type" disabled>目录</el-radio>
          <el-radio :label="2" v-model="form.type" disabled>菜单</el-radio>
        </el-form-item>
        <el-form-item label="菜单图标" v-if="form.type==1">
          <el-select v-model="form.icon" placeholder="请选择菜单图标">
            <el-option v-for="item in icon" :key="item" :value="item">
              <i :class="item"></i>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单地址" v-else>
          <el-select v-model="form.url" placeholder="请选择菜单地址">
            <el-option
              v-for="item in indexRouters"
              :key="item.path"
              :label="item.name"
              :value="'/' + item.path"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="cancel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { indexRouters } from "../../../router/index";
import { reqMenuAdd,reqMenuOne,reqMenuUpdate } from "../../../util/request";
import {successAlert,warningAlert} from "../../../util/alert"
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      // 用来渲染图标
      icon: [
        "el-icon-eleme",
        "el-icon-goods",
        "el-icon-warning-outline",
        "el-icon-upload",
      ],
      // 用来渲染菜单地址下拉列表
      indexRouters: indexRouters,
      form: {
        pid: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1,
      },
    };
  },
  computed: {
    ...mapGetters({
      list:"menu/list"
    }),
  },
  methods: {
    ...mapActions({
      reqChangeList:"menu/reqChangeList"
    }),
    // 点击取消
    cancel() {
      this.info.isShow = false;
      this.empty()
    },
    // 作用：用来重置form数据
    empty() {
      this.form = {
        pid: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1,
      };
    },
    // 点击提交
    add() {
      reqMenuAdd(this.form).then(res=>{
        if(res.data.code === 200){
          // 弹窗
          successAlert(res.data.msg)
          // 取消弹窗并重置form数据
          this.cancel()
          // 刷新list列表
          this.reqChangeList()
        }else{
          warningAlert(res.data.msg)
        }
      })
    },
    // 改变了changePid
    changePid(){
      if(this.form.pid == 0){
        this.form.type = 1
      }else{
        this.form.type = 2
      }
    },
    // 获取一条数据信息
    getOne(id){
      reqMenuOne(id).then(res=>{
        this.form = res.data.list
        this.form.id = id
      })
    },
    // 修改
    update(){
      reqMenuUpdate(this.form).then(res=>{
        if(res.data.code === 200){
          successAlert(res.data.msg)
          // 关闭弹窗并重置数据
          this.cancel()
          // 刷新list列表
          this.reqChangeList()
        }else{
          warningAlert(res.data.msg)
        }
      })
    }
  },
  mounted() {},
};
</script>
<style scoped>
</style>
