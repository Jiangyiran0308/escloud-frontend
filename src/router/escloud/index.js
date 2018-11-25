
const index = resolve => {require(['../../views/escloud/menu/index'],resolve)};

const login_home = resolve => {require(['../../views/escloud/login/index'],resolve)};
const testview = resolve => {require(['../../components/Test'],resolve)};

const list = [
  {
    path:'/',
    name:'app',
    component:  index,
    children:[
      {path: '', redirect: '/home'},
      {path:'home',name:'home', component:testview,},
      {path:'system/menuManage',name:'menuManage', component:testview,},
    ]
  },
  {
    path:'/login',
    name:'login',
    component:login_home
  }
];


export default list

export { list }
