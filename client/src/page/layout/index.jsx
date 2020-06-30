import './index.less'
import React from 'react'
import { Menu } from 'antd'
import { connect } from 'react-redux'
@connect(
  state => {
    return {
      name: state.login.nameEn
    }
  },
  {}
)
class Layout extends React.Component{
  constructor( props ){
    super( props )
    this.state = {
      navList: [
        { name: '日志', value: 'log', path: '/' },
        { name: '个人中心', value: 'center', path: '/center' },
        { name: '系统管理', value: 'system', path: '/system' },
      ],
      current: 'log'
    }
  }
  menuClick( e, item ) {
    this.setState({
      current: item.value
    })
  }
  componentWillMount() {
    console.log(this.props)
    if ( false ) {
      // this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div className="layout-page-wrap">
        <ul className="layout-page">
          {
            this.state.navList.map( ( item, index ) => {
              return (
                <li 
                key={item.value} 
                className={ this.state.current == item.value ? 'list-item-active list-item' : 'list-item'}
                onClick={ ( e ) => { this.menuClick(e, item) } }
                >
                  {item.name}
                </li>
              )
            } )
          }
        </ul>
      </div> 
    )
  }
}
export default Layout