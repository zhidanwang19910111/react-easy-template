import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '@/lib/util/axios.js'
import Api from './api/index.js'
import './index.less'
@connect(
  state => {
    return {
      username: state.login.username
    }
  }
)
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  
  validateLoginPassword( rule, value, callback ) {
    if( !value ) {
      return Promise.resolve()
    }
    return Promise.reject( new Error('姓名或密码错误') )
  }
  onFinish( e ) {
    let { password, username } = e
    let params = {
      password,
      username
    }
    this.props.login(params)
    .then( res => {
      if( res.success ) {
        this.props.history.push('/')
      }
    })
  }
  render() {
    return (
      <Form size="large"
      id="login"
      onFinish={ (e) => this.onFinish(e) }
      >
        { /* 账号 */ } 
        <Form.Item 
        name="username" 
        prefix={ <UserOutlined /> }
        rules={[ 
          { required: true, message: '请输入账号' }
        ]}>
          <Input placeholder="请输入账号" prefix={ <UserOutlined /> } />
        </Form.Item>
        { /* 密码 */ }
        <Form.Item 
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { validator: ( rule, value ) => this.validateLoginPassword(rule, value ) }
        ]}
        >
          <Input placeholder="请输入密码" prefix={ <LockOutlined /> } type="password"/>
        </Form.Item>
        {/* 登陆操作 */}
        <Form.Item className="login-btn">
          <Button type="primary" htmlType="submit">登陆</Button>
        </Form.Item>
      </Form>
    )
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    login( payload ) {
      return axios.post(Api.login, payload)
      .then( res => {
        if( res.success ) {
          let action = { type: 'LOGIN', payload }
          dispatch( action )
        }
        return res
      })
    }
  }
}
export default Login