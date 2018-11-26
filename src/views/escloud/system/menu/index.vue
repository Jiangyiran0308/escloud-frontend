<style scoped>

</style>
<template>
  <div style="margin: 50px">

    <el-button style="margin-bottom: 30px" @click="createAccount">新建</el-button>

    <el-table
      :data="tableData"
      border
      style="text-align: center">
      <el-table-column prop="sort" label="序号" align="center" width="80"/>
      <el-table-column prop="menuName" label="菜单名" align="center" width="200"/>
      <el-table-column prop="url" align="center" label="运行地址"/>
      <el-table-column prop="url" align="center" label="子菜单数量" width="100"/>
      <el-table-column label="状态" align="center" width="80">
        <template slot-scope="scope">
          <label v-if="scope.row.status === 1" style="color: #5daf34">
            已启用
          </label>
          <label v-else style="color: #FF9600">
            已禁用
          </label>
        </template>
      </el-table-column>
      <el-table-column  align="center" label="操作" width="180">
        <template slot-scope="scope">
          <label>
            <el-button type="text" size="small">编辑</el-button>
          </label>
          <label>
            <el-button type="text" size="small">详情</el-button>
          </label>
          <label v-if="scope.row.status === 1">
            <el-button type="text" size="small">禁用</el-button>
          </label>
          <label v-else>
            <el-button type="text" size="small">启用</el-button>
          </label>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "index",
        props: {},
        components: {},
        data() {
            return {
              tableData:[{
                id:'',
                menuName:'',
                parentId:'',
                level:'',
                sort:'',
                icon:'',
                url:'',
                status:''
              }]
            }
        },
        mounted() {
        },
        methods: {
          createAccount(){
            this.$router.push('/system/createAccount');
          }
        },
    }
</script>
