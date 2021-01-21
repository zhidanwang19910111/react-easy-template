import axios from 'axios'
import qs from 'qs'
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
    .then(res => {
      return res
    })
    .catch(err => {
        return err
    })
  },
  post( url, params ){
    return instance.post( url, qs.stringify(params))
    .then(
      res => {
        return res
      },
      err => {
        return err
      }
    )
  },
  postJson( url, params ){
    return instance.post( url, JSON.stringify(params), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
  },
  postForm( url, params ){
    let options = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    return instance.post(url, params, options)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
  }

  
}

export default nativeAxios
