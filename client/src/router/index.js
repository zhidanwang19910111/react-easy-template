import React from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import RouterConfig from './config.js'
import Main from '../page/main/index.jsx'
import Login from '../page/login/index.jsx'


const AppRouter = () => {
  return (
    <Router>
      {
        RouterConfig.map( (route, index) => {
          return <Route key={index} exact path={route.path} component={route.component}></Route>
        })
      }
    </Router>
  )
}
export default AppRouter