<template>
  <el-dialog title="修改会员"  @close="cancel"  :visible.sync="info.isShow"   width="40%">
    <!-- 表单 -->
    <el-form :model="forminfo" ref="form" label-width="140px">
        <el-form-item label="会员名" prop="nickname">
            <el-input  readonly v-model="forminfo.nickname"></el-input>
        </el-form-item>
         <el-form-item label="手机号" prop="phone">
            <el-input readonly v-model="forminfo.phone" ></el-input>
        </el-form-item>
       <el-form-item label="密码" >
           <el-input v-model="forminfo.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="会员状态">
            <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
       <el-form-item label="">
            <el-button type="primary" @click="sumbit">提交</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</template>
<script>
// 导入  添加和修改的 请求封装方法！
import {editMember } from "@/request/member"
let defaultItem = {
    uid:"",  
    nickname:"",
    phone:"",
    password:"",
    status:1    // 状态1正常2禁用
}
let resetItem = {...defaultItem}
export default {
    props:{
        info:{
            type:Object,
            default(){
                return {
                    isAdd:true,
                    isShow:false
                }
            }
        }
    },
     data(){
        return{
            forminfo:{...defaultItem},
        }
    },
    methods:{
        setinfo(val){  // 将数据赋给默认defaultItem; 赋给表单
            val.password="";
            defaultItem = {...val};
            this.forminfo = {...val};
        },
        async sumbit(){
            // 表单验证！
            this.$refs.form.validate(async valid=>{
                if(valid){ // 如果验证通过！
                    let res;
                    res = await editMember(this.forminfo)
                    if(res.code==200){
                        this.$message.success(res.msg)
                        this.info.isShow = false;
                        // this.get_member_list(); // 重新获取角色列表！
                        this.$emit('update')
                        this.cancel();
                    }else{
                        this.$message.error(res.msg)
                    }
                }
            })
        },
        reset(){
            // 修改时候的重置！
                this.setinfo({...defaultItem})
        },
        cancel(){
            this.forminfo = {...resetItem}
        }
    },
    components:{}
}
</script>
<style scoped>
</style>