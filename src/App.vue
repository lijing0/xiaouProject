<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.table-bg{
  background-color: #fff;
  margin: 15px 0;
  padding: 20px;
}
.el-dialog__header{
  padding: 15px 20px 10px ;
  border: 1px solid #e0e0e0;
}
</style>
