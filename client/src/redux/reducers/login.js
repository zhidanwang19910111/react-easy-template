const loginReducer = ( state = { nameEn: 'wangzhidan'}, action) => {
  switch ( action.type ) {
    case "ADD_NAME":
      return { nameEn: 'yichunjing' }
    default:
      return state
  }
}
export default loginReducer