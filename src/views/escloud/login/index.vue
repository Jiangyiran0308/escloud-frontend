<style scoped>

</style>
<template>
    <div>
      未登录界面
      <!--<el-form :model="loginData" label-width="60px">-->
        <!--<el-form-item label="账户：">-->
          <!--<el-input v-model="loginData.account"/>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="密码：">-->
          <!--<el-input v-model="loginData.password"/>-->
        <!--</el-form-item>-->
        <!--<el-button @click="login">登录</el-button>-->
      <!--</el-form>-->
    </div>
</template>

<script>
    export default {
        name: "visitor",
        props: {},
        components: {},
        data() {
            return {
              loginData:{
                account:'',
                password:'',
              }
            }
        },
        mounted() {

        },
        methods: {
          login(){
            let vm = this ;
            let account = vm.loginData.account ;
            let password = vm.loginData.password ;

            console.log(account)
          }
        }

    }
</script>
