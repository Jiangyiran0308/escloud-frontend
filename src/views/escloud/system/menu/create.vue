<style scoped>

</style>
<template>
  <div style="margin: 50px">
    <el-form :model="menuInfo" label-position="right" label-width="80px">

      <el-form-item label="用户名">
        <el-input size="small" v-model="menuInfo.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input size="small" type="password"  v-model="menuInfo.password"/>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input size="small" v-model="menuInfo.name"/>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit">创建</el-button>
        <el-button size="small" @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "create",
        props: {},
        components: {},
        data() {
            return {
              menuInfo:{}
            }
        },
        mounted() {
        },
        methods: {
          onSubmit(){
            console.log(this.accountInfo.roleList)
          },
          onCancel(){
            this.$router.go(-1);
          }
        },
    }
</script>
