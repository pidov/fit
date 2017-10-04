export const SET_FIELD = 'SET_FIELD'

// state.forms.[formName].fields.[fieldName].value

const state = {
  fields: {
    weight: {
      value: 107
    }
  },
  height: 192
}

const mutations = {
  [SET_FIELD] (state) {

  }
}

const actions = {
  setField ({ commit }) {
    commit({ type: SET_FIELD })
  }
}

const getters = {
  getField: state => fieldName => state.fields[fieldName].value
}

export default { state, actions, mutations, getters }
