<template>
  <div>
    <el-button type="primary" @click="showAdd">添加</el-button>
    <v-list @update="update"></v-list>
    <v-add :info="isShow" ref="aaa"></v-add>
  </div>
</template>
<script>
import vList from "./components/list.vue";
import vAdd from "./components/add.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {
    vList,
    vAdd,
  },
  data() {
    return {
      isShow: {
        isShow: false,
        isAdd: true,
      },
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    showAdd() {
      this.isShow.isShow = true;
      this.isShow.isAdd = true;
    },
    //编辑
    update(id) {
      this.isShow.isShow = true;
      this.isShow.isAdd = false;
      this.$refs.aaa.getOne(id)
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>
