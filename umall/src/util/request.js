import axios from "axios"
import qs from "qs"

let baseUrl = "/api"

// 响应拦截
axios.interceptors.response.use(res => {
  console.group("======本次请求的路径：" + res.config.url)
  console.log(res)
  console.groupEnd("请求结束")
  return res
})
/* ===================Menu===================== */
// 添加
export const reqMenuAdd = (form) => {
  return axios({
    url: baseUrl + "/api/menuadd",
    method: "post",
    data: qs.stringify(form)
  })
}
// menu列表
export const reqMenuList = ()=>{
  return axios({
    url: baseUrl + "/api/menulist",
    method: "get",
    params:{
      istree:true
    }
  })
}
// 删除
export const reqMenuDel = (id)=>{
  return axios({
    url: baseUrl+"/api/menudelete",
    method:"post",
    data:qs.stringify({id:id})
  })
}
// 获取一条数据
export const reqMenuOne = (id)=>{
  return axios({
    url:baseUrl+"/api/menuinfo",
    method:"get",
    params:{
      id:id
    }
  })
}
// 修改数据
export const reqMenuUpdate = (form)=>{
  return axios({
    url:baseUrl+"/api/menuedit",
    method:"POST",
    data:qs.stringify(form)
  })
}
