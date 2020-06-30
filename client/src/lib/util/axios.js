import axios from 'axios'
var instance = axios.create()

/* instance.interceptors.request.use( function( req ) {
  
}) */

instance.interceptors.response.use( function( res ) {
  res.data = res.data || {}
  res = res.data
  return res
}, function( err ){
  return Promise.reject( err )
})

var nativeAxios = {
  get( url, params ) {
    return instance.get( url, {
      params,
    })
  },
  
}

export default nativeAxios
