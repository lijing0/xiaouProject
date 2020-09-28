<template>
  <el-container class="page">
    <el-aside :width="iscollapse? '64px ':'220px'" class="page-nav">
      <Left />
    </el-aside>
    <el-container class="page-content">
      <el-header class="page-header">  
        <Top />
      </el-header>
      <el-main class="page-main">
        <tagslist/>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Left from "./left";
import Top from "./top";
import tagslist from './tagslist'
import {mapState} from "vuex"
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState(['iscollapse'])
  },
  created() {},
  methods: {},
  components: {
    Left,
    Top,
    tagslist
  },
};
</script>
<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.page-content {
  height: 100%;
  background: #f3f3f3;
}
.page-main {
   background: #f7f7f7;
}
.page-header {
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  background: #fcfcfc;
  position: relative;
  z-index: 1000;
}
.page-nav {
  height: 100%;
  background: #333;
}
.toggle-btn i{
    font-size:16px;
}
.page-main{
  position: relative;
  padding-top: 50px;
}
</style>