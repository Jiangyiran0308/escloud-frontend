<style scoped>

</style>
<template>
  <div>
    <div>
    test!!!!!!!!!!
    后端传来的数据为：
    {{testData}}
    </div>
    <div>
      {{testData2}}
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
          console.log(xhr);
          vm.testData2 = xhr.data ;
        })
        .catch((error)=>{

        })
    },
    methods: {},
  }
</script>
