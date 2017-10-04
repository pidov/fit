export const SET_FIELD = 'SET_FIELD'

// state.forms.[formName].fields.[fieldName].value

const fields = ['height', 'weight', 'shoulders', 'chest', 'waist', 'leftBiceps', 'rightBiceps', 'leftTriceps', 'rightTriceps', 'leftForearm', 'rightForearm', 'hip', 'leftThigh', 'rightThigh', 'leftCalf', 'rightCalf', 'ankle']

const mapFieldsToState = (fields) => fields.reduce((acc, field) => {
  acc[field] = {
    value: '',
    error: {
      message: '2',
      hasError: false
    }
  }
  return acc
}, {})

const initialState = {
  measurements: {
    fields: mapFieldsToState(fields)
  }
}

const mutations = {
  [SET_FIELD] (state, { formName, fieldName, fieldValue }) {
    state[formName].fields[fieldName].value = fieldValue
  }
}

const actions = {
  setField ({ commit }, payload) {
    commit({ type: SET_FIELD, ...payload })
  }
}

const getters = {
  inputFields: state => formName => state[formName].fields
}

export default { state: initialState, actions, mutations, getters }
