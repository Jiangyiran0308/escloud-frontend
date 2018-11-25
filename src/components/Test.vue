<style scoped>

</style>
<template>
  <div>
    <div>
    后端传来的数据为：
    {{testData}}
    </div>
    <div>
      {{testData2}}
    </div>
    <div>
      <el-button @click="getSuccessMessage">成功消息</el-button>
      <el-button @click="getInfoMessage">普通消息</el-button>
      <el-button @click="getWarnMessage">告警消息</el-button>
      <el-button @click="getFailMessage">失败消息</el-button>
      <el-button @click="getInfoData">数据</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "test",
    props: {},
    components: {},
    data() {
      return {
        testData:'',
        testData2:'null',

      }
    },
    mounted() {
      let vm = this ;
      // this.$http.get(this.hytGlobal.parent_url+'/data').then(function (xhr) {
      //   console.log(xhr);
      // })
      // var user = new URLSearchParams();
      // user.append("user","jiangyiran");
      // this.$http.post('/login_action',{username:"amdin",password:"123456"}).then((xhr)=>{
      //   console.log(xhr);
      //   window.localStorage.setItem("user_id","11111111");
      //   // next();
      // });

      let uu = {
        username:"jiangyiran",
        password:"123456"
      };

      let user = "123456";

      this.$http.get('/data',{
        params:{
          user:user
        }
      })
        .then(function (xhr) {
          // console.log(response.data);
          vm.testData = xhr.data ;
        })
        .catch(function (error) {
          // console.log(error);
        });

      this.$http.post('/test',uu)
        .then((xhr)=>{
          // console.log(xhr);
          vm.testData2 = xhr.data ;
        })
        .catch((error)=>{
        })
    },
    methods: {
      getSuccessMessage(){
        this.$http.get('/messagesuccess').then((xhr)=>{
          console.log(xhr);
        }).catch((error)=>{console.log(error)});
      },
      getInfoMessage(){
        this.$http.get('/messageinfo').then((xhr)=>{
          console.log(xhr);
          }).catch((error)=>{console.log(error)});
      },
      getWarnMessage(){
        this.$http.get('/messagewarn').then((xhr)=>{
          console.log(xhr);
        }).catch((error)=>{});
      },
      getFailMessage(){
        this.$http.get('/messagefail').then((xhr)=>{
          console.log(xhr);
        }).catch((error)=>{});
      },
      getInfoData(){
        this.$http.get('/datainfo').then((xhr)=>{
          console.log(xhr);
        }).catch((error)=>{});
      }
    },
  }
</script>
