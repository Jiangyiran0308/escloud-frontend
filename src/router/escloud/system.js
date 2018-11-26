const account_index =  resolve => {require(['../../views/escloud/system/account/index'],resolve)} ;
const account_create =  resolve => {require(['../../views/escloud/system/account/create'],resolve)} ;

const menu_index = resolve => {require(['../../views/escloud/system/menu/index'],resolve)} ;


const list = [
  {path:'system/allAccount',component:account_index},
  {path:'system/createAccount',component:account_create},


  {path:'system/firstMenu',component:menu_index}
] ;

export default list

export { list }
