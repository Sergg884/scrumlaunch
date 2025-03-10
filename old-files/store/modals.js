export const state = () => ({
  content: null,
  isShown: false,
})

export const getters = {
  getContent: (state) => {
    return state.content
  }
}

export const mutations = {
  setContent: (state, content) => {
    state.content = content
  },
  setShowModal: (state, newState) => {
    state.isShown = newState
  }
}