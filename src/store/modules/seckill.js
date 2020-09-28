// 获取秒杀列表
import {
  getSeckill
} from "@/request/seckill"
export default {
  namespaced: true,
  state: {
    seckilllist: [] //秒杀列表
  },
  getters: {
    seckilllist: state => state.seckilllist
  },
  mutations: {
    SET_LIST(state, data) {
      state.seckilllist = data
    }
  },
  actions: {
    //请求秒杀列表的数据
    async get_seckill_list({
      commit
    }) {
      let res = await getSeckill();
      commit('SET_LIST', res)
    }
  }
}