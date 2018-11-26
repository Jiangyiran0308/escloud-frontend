<style scoped>
  .loginbackgroud{
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../../assets/picture/wall.png");
    width: 100%;
    height: 100%;
    color: #FFFFFF;
  }
  .loginFrame{
    position: absolute;
    top: 30%;
    right: 10%;
    margin-top: -5em;
    margin-left: -9em;
    width: 300px;
    padding: 50px 30px;
    background-color: rgba(255,255,255,0.1);
    text-align: center;
  }
  .logintitle{
    margin-bottom: 30px;
    font-size: 35px;
    /*font-weight: bold;*/
  }
  .loginInput{
    color: #FFFFFF;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 30px;
    background-color: rgba(255,255,255,0.2);
    border:1.5px solid rgba(255,255,255,0);
    /*box-shadow:0 0 10px #FFFFFF;*/
    /*border-radius:15px;*/
  }
  .loginInput:focus{
    background-color: rgba(255,255,255,0.2);
    border:1.5px solid rgba(0, 247, 255, 1);
    box-shadow:0 0 10px #00F7FF;
  }
  .loginsubmit{
    cursor: pointer;
    color: #FFFFFF;
    width: 100%;
    /*margin-top: 10px;*/
    padding: 15px;
    background-color: rgba(0, 162, 255, 0.48);
    border:1.5px solid rgba(0, 162, 255, 0);
    /*border-radius:10px;*/
  }
  .loginsubmit:hover{
    background-color: rgba(0, 162, 255, 0.65);
  }

</style>
<template>
    <div class="loginbackgroud">
      <div class="loginFrame">
        <div class="logintitle">LOGIN</div>
        <form method="post" action="http://localhost:8080/login_action">
          <label>
            <input class="loginInput" type="text" name="username" placeholder="请输入用户名"/>
          </label>
          <label>
            <input class="loginInput" type="password" name="password" placeholder="请输入密码"/>
          </label>
          <label>
            <button class="loginsubmit" type="submit">
              登录
            </button>
          </label>
        </form>
      </div>
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
