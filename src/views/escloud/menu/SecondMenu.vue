<style scoped>

</style>
<template>
    <div>
        <div style="float: left;width: 110px;text-align: center" v-for="item in menuData">
          <el-menu-item v-if="(item.child.length===0||item.child==null)&&item.entity" :index="item.entity.id" @click="handleSelect(item)">
            {{item.entity.name}}
          </el-menu-item>
          <el-submenu v-else-if="(item.entity&&item.child)" :index="item.entity.id" @click="handleSelect(item)">
            <template slot="title">{{item.entity.name}}</template>
            <other-menu :menuData="item.child"/>
          </el-submenu>
        </div>
    </div>
</template>

<script>
    import OtherMenu from './OtherMenu'
    export default {
        name: "second-menu",
        props: {
          menuData:{
            type:Array,
            default:() => []
          }
        },
        components: {
          "other-menu": OtherMenu
        },
        data() {
          return {
            activeIndex:'1',
          }
        },
      mounted() {},
        methods: {
          handleSelect(val){
            let vm = this ;
            let url = val.entity.value;
            vm.$router.push({path:url});
          }
        }

    }
</script>
