<style scoped>
  .profilDiv{
    display:inline-block;
    margin:5px auto;
    width:38px;
    height:38px;
    border-radius:38px;
    -webkit-border-radius:38px;
    -moz-border-radius:38px;
    border:2px solid #fff;
    /*box-shadow:0 0 3px #ccc;*/
    overflow:hidden;
    float: left;
    cursor:pointer;
  }
</style>
<template>
    <div>
      <div class="profilDiv" @click="clickUserName">
        <!--头像圆形显示-->
        <img :src="headPortrait" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
      </div>
      <div style="height:50px;color: #FFFFFF;float: left;line-height: 50px;margin-left: 15px;margin-right: 15px;cursor:pointer;">
        <span @click="clickUserName">{{userName}}</span>
        <el-dropdown v-if="loginflag">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right" style="color: #ffffff"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="clickUserMsg">
              <span class="ji-iconfont-message" style="font-size: 15px;margin-right: 8px"></span>消息
            </el-dropdown-item>
            <el-dropdown-item @click.native="clickUserSettting">
              <span class="ji-iconfont-settings" style="font-size: 15px;margin-right: 8px"></span>设置
            </el-dropdown-item>
            <el-dropdown-item @click.native="clickUserQuit">
              <span class="ji-iconfont-back_android" style="font-size: 15px;margin-right: 8px"></span>注销
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <!--登录窗口，点击modal不能关闭-->
      <el-dialog id="loginWin"
        title="登录"
        :visible.sync="loginWindowflag"
        width="400px"
        center
        :close-on-click-modal="false"
        :close-on-press-escape="false">
        <form  method="post" action="http://localhost:8080/login_action">
          <label>
            <input type="text" name="username"/>
          </label>
          <label>
            <input type="password" name="password"/>
          </label>
          <input type="submit" name="dengli"/>
        </form>
        <!--<span style="font-size: 16px;color: #9B9B9B">账&nbsp;&nbsp;&nbsp;号：</span>-->
        <!--<el-input v-model="inputAccount" placeholder="请输入用户名" style="margin-top: 10px;margin-bottom: 10px"></el-input><br>-->
        <!--<span style="font-size: 16px;color: #9B9B9B">密&nbsp;&nbsp;&nbsp;码：</span>-->
        <!--<el-input v-model="inputPassword" placeholder="请输入密码" style="margin-top: 10px;margin-bottom: 10px"></el-input>-->
        <!--<span style="color: #1b88ed;font-size: 10px;cursor:pointer" @click="signin">-->
          <!--没有账号？去注册-->
          <!--<span class="ji-iconfont-right" style="font-size: 10px"></span>-->
        <!--</span>-->
        <!--<span slot="footer" class="dialog-footer">-->
          <!--<el-button @click="loginWindowflag = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="loginin">确 定</el-button>-->
        <!--</span>-->
      </el-dialog>

    </div>
</template>

<script>
    import defaultPic from '../../../assets/picture/defaulthead.png'
    export default {
        name: "user-info",
        props: {},
        components: {},
        data() {
            return {
              userId:'',
              headPortrait:defaultPic,//默认头像
              userName:"登录",
              loginflag:false, //默认false状态，不显示按钮

              loginWindowflag:false,
              loginLoading:false,
              inputAccount:'',
              inputPassword:'',

            }
        },
        mounted() {
          // this.getUserInfo();
        },
        methods: {
          getUserInfo(){
            let  vm = this ;
            vm.$http.get('/api/userInfo').then(function (xhr) {
              let data = xhr.body.data ;
              console.log(data);
              if(data){
                if(data.id && data.id.length > 0){
                  vm.userId = data.id;
                  vm.loginflag = true;
                  vm.userName = data.name ;
                }
              }
            })
          },
          clickUserName(){
            let vm = this ;
            if(vm.loginflag === false){
              vm.loginWindowflag = true ;
            }
            else if(vm.loginflag === true){
              let vm = this ;
              vm.$router.push({path:'/my.j.blog/setting/editData'});
            }
          },
          clickUserMsg(val){

          },
          clickUserSettting(val){
            console.log(val);
          },
          clickUserQuit(val){
            console.log(val);
          },
          loginin(){
            let vm = this ;
            const loading = this.$loading({
              lock: true,
              text: '正在登录……',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.5)',
              target: document.querySelector('#loginWin')
            });

            this.$http.post('/login_action',{username:vm.inputAccount,password:vm.inputPassword}).then((xhr)=>{
              let userinfo = xhr.data ;
              loading.close();
            }).catch((error)=>{console.log(error)});

            setTimeout(() => {
              loading.close();
            }, 3000);
          },
          signin(){

          }
        }

    }
</script>
