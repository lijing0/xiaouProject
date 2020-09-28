<template>
  <div class="table-bg">
    <el-table :data="list" border row-key="id">
      <el-table-column prop="uid" label="用户ID" align="center" width="350px"></el-table-column>
      <el-table-column prop="nickname" label="昵称" align="center"></el-table-column>
      <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
      <el-table-column prop="addtime" label="注册日期" align="center">
           <template slot-scope="scope">
                  {{scope.row.addtime|getTime('YYYY/MM/DD')}}
              </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary"  size="small"  @click="edit(scope.row)"  circle  icon="el-icon-edit"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {delMember,getMember} from "@/request/member"
export default {
  data() {
    return {
      list:[]
    };
  },
  mounted() {
    this.get_list()
  },
  methods: {
    edit(val) {
      this.$emit('edit',{...val})
    },
    async get_list(){
      let res = await getMember()//res是返回的列表数据
     this.list = res;
    }
  },
  components: {},
};
</script>
<style scoped>
</style>