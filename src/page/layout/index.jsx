import './index.less'
import React from 'react'
import { Menu, Button } from 'antd'
import { connect } from 'react-redux'
import login from '@/redux/actions/index.js'
@connect(
  state => {
    return {
      name: state.login.username
    }
  },
  login
)
class Layout extends React.Component{
  constructor( props ){
    super( props )
    this.state = {
    }
  }
  changeName() {
  }
  menuClick( e, item ) {
    this.setState({
      current: item.value
    })
  }
  componentWillMount() {
  }
  render() {
    return (
      <div className="layout-page-wrap">
        <div className="layout-page-title">
          <p>Wecome to React-Liter-Cli</p>
          <p>Coding change the word</p>
        </div>
      </div> 
    )
  }
}
export default Layout