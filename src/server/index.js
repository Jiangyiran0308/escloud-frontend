import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";

const base = 'http://localhost:8080';
// const base = '/';

const Axios = axios.create({
  baseURL: base,
  timeout: 15000,
  // responseType: "json",
  // withCredentials: true, //允许带cookie
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
    // if (res.data && !res.data.success) {
    //   Message({
    //     //  饿了么的消息弹窗组件,类似toast
    //     showClose: true,
    //     message: res.data.error.message.message
    //       ? res.data.error.message.message
    //       : res.data.error.message,
    //     type: "error"
    //   });
    //   return Promise.reject(res.data.error.message);
    // }
    return res;
  },
  error => {


    // 返回 response 里的错误信息
    console.log(error)
    let errorInfo =  error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
