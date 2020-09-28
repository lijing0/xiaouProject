import $axios from "@/common/http" // 导入封装好的axios!

/**
 * 获取会员列表
 */
export async function getMember() {
  let res = await $axios.get("/memberlist")
  if (res.code == 200 && res.list) {
    return res.list
  } else {
    return [];
  }
}
/**
 * 修改会员
 * @param {*} data  修改的数据
 */
export function editMember(data) {
  return $axios.post("/memberedit", data)
}

