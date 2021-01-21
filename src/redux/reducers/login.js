const loginReducer = ( state = { uesename: ''}, action) => {
  switch ( action.type ) {
    case "LOGIN":
      return {
        ...state,
        uesename: action.payload.username || ''
      }
    default:
      return state
  }
}
export default loginReducer
