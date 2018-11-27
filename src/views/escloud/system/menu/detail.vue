<style scoped>

</style>
<template>
    <div style="margin: 50px">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="基本信息" name="detailInfo">
          <div>ID：{{menuInfo.id}}</div>
          <div>菜单名称：{{menuInfo.menuName}}</div>
          <div>菜单层级：{{menuInfo.level}}</div>
          <div>排序号：{{menuInfo.sort}}</div>
          <div>图标：{{menuInfo.icon}}</div>
          <div>运行地址：{{menuInfo.url}}</div>
          <div>状态：
            <label v-if="menuInfo.status === 1">已启用</label>
            <label v-else>已禁用</label>
          </div>
        </el-collapse-item>
        <el-collapse-item title="子菜单" name="childInfo">
          <div style="width: 25%;float: left">
            <el-tree :data="childList" :props="defaultProps" @node-click="handleMenuClick"/>
          </div>
          <div style="width: 70%;float: left">
            <div>ID：{{activeChildMenu.id}}</div>
            <div>菜单名称：{{activeChildMenu.menuName}}</div>
            <div>菜单层级：{{activeChildMenu.level}}</div>
            <div>排序号：{{activeChildMenu.sort}}</div>
            <div>图标：{{activeChildMenu.icon}}</div>
            <div>运行地址：{{activeChildMenu.url}}</div>
            <div>状态：
              <label v-if="activeChildMenu.status === 1">已启用</label>
              <label v-else>已禁用</label>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="相关功能" name="resourceInfo">
          <div style="width: 25%;float: left">
            <el-tree :data="childList" :props="defaultProps" @node-click="handleResClick"/>
          </div>
          <div style="width: 70%;float: left">
            <el-table
              :data="activeResList"
              border
              style="text-align: center">
              <el-table-column prop="resName" align="center" label="名称"/>
              <el-table-column prop="requestUrl" align="center" label="请求地址"/>
              <el-table-column prop="controllerName" align="center" label="控制器"/>
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
              <el-table-column  align="center" label="操作">
                <template slot-scope="scope">
                  <label>
                    <el-button type="text" size="small">详情</el-button>
                  </label>
                  <label v-if="scope.row.status === 1">
                    <el-button type="text" size="small">禁用</el-button>
                  </label>
                  <label v-else>
                    <el-button type="text" size="small">启用</el-button>
                  </label>
                  <label>
                    <el-button type="text" size="small">删除</el-button>
                  </label>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "detail",
        props: {},
        components: {},
        data() {
            return {
            //  下拉显示
              activeNames:['detailInfo','childInfo','resourceInfo'],
            //  基础信息
              menuInfo:{},
            //  子菜单
              childList: [{
                id: '11111',
                menuName:'一级菜单',
                parentId:'',
                level:'',
                sort:'1',
                icon:'',
                url:'',
                status:'',
                children: [{
                  id: '2222',
                  menuName:'二级菜单',
                  parentId:'',
                  level:'',
                  sort:'1',
                  icon:'',
                  url:'',
                  status:'',
                  children: [{
                    id: '33333',
                    menuName:'三级菜单',
                    parentId:'',
                    level:'',
                    sort:'1',
                    icon:'',
                    url:'',
                    status:'',
                    children:[]
                  }]
                }]
              }],
              defaultProps: {
                children: 'children',
                label: 'menuName'
              },
              activeChildMenu:{},
            //  资源信息
              resList:[],
              activeResList:[]
            }
        },
        mounted() {
          let vm = this ;
          vm.menuInfo = this.$route.query.data;
        },
        methods: {
          handleMenuClick(val){
            let vm = this ;
            vm.activeChildMenu = val ;
          },
          handleResClick(val){
            let vm = this ;
          },
        },
    }
</script>
