import axios from 'axios'

const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList
}

const actions = {
  fetchOrderList ({ commit, state }) {
    axios.post('/api/getOrderList', state.params)
    .then((res) => {
      commit('updateOrderList', res.data.data.list)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  updateOrderList (state, payload) {
    state.orderList = payload
  },
  // updateParams (state, payload) {
  //   state.params[payload.key] = payload.val
  // },
  updateParams (state, {key, val}) {
    state.params[key] = val
    console.log(state.params)
  },
  changeDesc (state, payload) {
    state.orderList = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
