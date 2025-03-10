export const state = () => ({
  requirements: '',
})


export const mutations = {
  SET_REQUIREMENTS(state, text) {
    state.requirements = text
  },
}

export const getters = {
  GET_REQUIREMENTS: (state) => {
    return state.requirements
  }
}
