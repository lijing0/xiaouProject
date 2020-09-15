<template>
    <el-row class="login-bg">
        <el-col :span="8" class="login-box">
            <h3>小U商城管理系统</h3>
            <el-form :model="forminfo" ref="form" :rules="rules">
                <el-form-item prop="username"> 
                    <el-input v-model="forminfo.username" placeholder="请输入账号">
                         <template slot="prepend">
                             <i class="el-icon-user"></i>
                         </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">  
                    <el-input v-model="forminfo.password" show-password placeholder="请输入密码">
                        <template slot="prepend">
                            <i class="el-icon-lock"></i>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="submit">立即登录</el-button>
                </el-form-item>
            </el-form>
            
        </el-col>
    </el-row>
</template>

<script>
import {mapActions} from "vuex"
export default {
 data(){
 return{
     forminfo:{
         username:"admin",
         password:"admin"
     },
     rules:{
         username:[{required:true,message:"必填！",trigger:'blur'}],
         password:[{required:true,message:"必填！",trigger:'blur'}],
     }
 }
 },
 created(){},
 methods:{
     ...mapActions({
         login:"user/login"
     }),
     submit(){
         this.$refs.form.validate(valid=>{
             if(valid){
                 this.login(this.forminfo)
             }
         })
     }
 },
 components:{}
}

</script>
<style scoped>
.login-bg{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/img/bg.jpg);
    background-size: 100% 100%;
}
.login-box{
    background-color: #fff;
    box-shadow: 0 0px 4px 0 rgba(0,0,0,.3);
    padding:40px;
    border-radius: 5px;
}
.login-box h3{
    text-align: center;
    line-height: 40px;
    margin-bottom: 20px;
}
.login-btn{
    display: block;
    width: 100%;
}
</style>