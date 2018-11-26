import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";

const base = 'http://localhost:8080';
// const base = '/';

const Axios = axios.create({
  baseURL: base,
  timeout: 15000,
  responseType: "json",
  withCredentials: true, //允许带cookie
  headers:{
    // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    "Content-Type": "application/json;charset=UTF-8"
  }
});

// 在发送请求之前做某件事
Axios.interceptors.request.use(
  // config=>{
  //   if(config.method === "post"){
  //     config.data = qs.stringify(config.data);
  //   }
  //
  //   return config ;
  // },
  // error => {
  //   Message({
  //     showClose: true ,
  //     message: error && error.data.error.message,
  //     type: 'error'
  //   });
  //   return Promise.reject(error.data.error.message);
  // }
);

//返回状态判断
Axios.interceptors.response.use(
  res =>{
    //对响应数据做些事
    if(res.data){
      let data = res.data ;
      if(data.showFlag === true){
        Message({
          showClose:true,
          type:data.level,
          message:data.message
        });
      }
    }
    else{
      Message({
        showClose:true,
        type:'error',
        message:"请求失败！"
      });
    }

    return res;
  },
  error => {
    // 返回 response 里的错误信息
    let status = error.response.status ;
    if(status === 403){
      Message({showClose:true, type:'warning', message:"权限不足，请联系管理员"});
    }else if(status === 500){
      Message({showClose:true, type:"error", message:"系统异常，错误500"});
    }else if(status === 504 || status === 404 ){
      Message({showClose:true, type:'error', message:"系统异常"});
    }else{
      Message({showClose:true, type:'error', message:"未知错误"});
    }
    return Promise.resolve(error);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
