const loginReducer = ( state = { nameEn: 'wangzhidan'}, action) => {
  switch ( action.type ) {
    case "CHANGE_NAME":
      return {
        ...state,
        nameEn: 'yichunjing' 
      }
    default:
      return state
  }
}
export default loginReducer