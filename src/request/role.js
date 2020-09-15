import $axios from "@/common/http" //导入封装好的axios


/* 添加角色 data添加的数据 */
export function addRole(data) {
  return $axios.post("/roleadd", data)
}
/* 修改角色 data修改的数据*/
export function editRole(data) {
  return $axios.post("/roleedit", data)
}
/* 删除角色 */
export function delRole(id) {
  return $axios.post("/roledelete", {
    id
  })
}
/* 获取角色列表 */
export async function getRole() {
  let res = await $axios.get("/rolelist")
  if (res.code == 200 && res.list) {
    return res.list
  } else {
    return [];
  }
}