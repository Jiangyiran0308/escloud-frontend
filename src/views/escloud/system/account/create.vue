<style scoped>

</style>
<template>
    <div style="margin: 50px">
      <el-form :model="accountInfo" label-position="right" label-width="80px">

        <el-form-item label="用户名">
          <el-input size="small" v-model="accountInfo.username"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input size="small" type="password"  v-model="accountInfo.password"/>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input size="small" v-model="accountInfo.name"/>
        </el-form-item>
        <el-form-item label="组织机构">
          <el-cascader
            expand-trigger="hover"
            :options="orgOption"
            v-model="accountInfo.orgOption"
            separator="-"
            change-on-select
            @change="orgOptionChange" />
        </el-form-item>
        <el-form-item v-if="accountInfo.orgOption.length > 0" label="角色">
          <el-select v-model="accountInfo.roleList" multiple filterable  placeholder="请选择角色">
            <el-option v-for="item in allRole" :key="item.id" :label="item.roleName" :value="item.id"></el-option>
            <!--<el-option key="1" label="用户" value="USER"/>-->
            <!--<el-option key="2" label="管理员" value="ADMIN"/>-->
          </el-select>
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
              orgOption:[],
              accountInfo:{
                id:'',
                username:'',
                name:'',
                password:'',
                avatar:'',
                createTime:'',
                orgOption:[],
                roleList:[]
              },
              allRole:[
                {
                  id:'',
                  orgId:'',
                  roleName:'',
                  roleDesc:'',
                }
              ]
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
          },
          orgOptionChange(){

          }
        },
    }
</script>
