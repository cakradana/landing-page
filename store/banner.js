const state = () => ({
  list: []
})

const mutations = {
  setBanner (state, value) {
    state.list = value
  }
}

const actions = {
  fetchBanner (store) {
    this.$axios
      .$get(
        '/api/banner.json'
      ).then((res) => {
        store.commit('setBanner', res)
        // eslint-disable-next-line no-console
      }).catch(err => console.log('error', err))
  }
}
export {
  state,
  mutations,
  actions
}
