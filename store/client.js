const state = () => ({
  list: []
})

const mutations = {
  setList (state, param) {
    state.list = param
  }
}

const actions = {
  fetchClient (store) {
    this.$axios
      .$get(
        '/api/client.json'
      ).then((res) => {
        store.commit('setList', res)
        // eslint-disable-next-line no-console
      }).catch(err => console.log('error', err))
  }
}
export {
  state,
  mutations,
  actions
}
