import $axios from "@/common/http"  //导入封装好的axios


/* 添加分类 data添加的数据 */
export function addBanner(data){
  return $axios.post("/banneradd", data)
}
/* 修改分类 data修改的数据*/
export function editBanner(data) {
    return $axios.post("/banneredit", data)
}
/* 删除分类 */
export function delBanner(id) {
    return $axios.post("/bannerdelete", {id})
}
/* 获取分类列表 */
export async function getBanner() {
  let res = await $axios.get("/bannerlist")
  if(res.code==200 && res.list){
    return res.list
  }else{
    return [];
  }
}