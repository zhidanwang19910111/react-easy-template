export default {
  changeName( params ) {
    console.log( params )
    return {
      type: 'CHANGE_NAME',
      payload: params
    }
  }
}
