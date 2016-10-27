import { HANDLE_API_RESPONSE } from './actions'

const initialState = {
  activeTopic: 'Basic Info',
  api: {},
}

function handleStateChange (state = initialState, action) {
  switch (action.type) {
    case HANDLE_API_RESPONSE:
      // clone state
      const newState = Object.assign({}, state)
      // put new api response
      newState.api[action.api] = Object.assign({}, action.response)
      return newState

    default:
      return state
  }
}

export default handleStateChange
