const initialState = {
  by: 1,
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.by
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.by
      }
    case 'CHANGE_VALUE':
      return {
        ...state,
        by: action.payload.by
      }
    default:
      return state
  }
}

export default counterReducer
