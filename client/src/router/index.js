import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from '../page/App/index.jsx'
console.log(App)
const AppRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}
export default AppRouter