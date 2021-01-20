export const state = () => {
  return {
    sidebarVisible: false,
  }
}

export const mutations = {
  toggleSidebar(state) {
    state.sidebarVisible = !state.sidebarVisible
  },
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('toggleSidebar')
  },
}
