<style scoped>

</style>
<template>
    <div>
      <label v-for="item in menuData">
        <el-menu-item v-if="(item.child.length===0||item.child==null)&&item.entity" :index="item.entity.id">
          {{item.entity.name}}
        </el-menu-item>
        <el-submenu v-else-if="(item.entity&&item.child)" :index="item.entity.id">
          <template slot="title">{{item.entity.name}}</template>
          <other-menu :menuData="item.child"/>
        </el-submenu>
      </label>
    </div>
</template>

<script>
    import OtherMenu from './OtherMenu'
    export default {
        name: "other-menu",
        props: {
          menuData:{
            type:Array,
            default:[]
          }
        },
        components: {
          "other-menu": OtherMenu
        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}

    }
</script>
