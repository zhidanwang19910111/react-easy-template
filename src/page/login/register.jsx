import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '@/lib/util/axios.js'
import Api from './api/index.js'
class Register extends React.Component{
  constructor(props) {
    super(props)
  }
  onRegister( e ) {

  }
  render() {
    return (
      <Form size="large"
      id="register"
      onFinish={this.onRegister.bind(this)}
      >
        { /* 账号 */ } 
        <Form.Item 
        name="username" 
        prefix={ <UserOutlined /> }
        rules={[
          {
            required: true,
            message: '请输入账号',
          }
        ]}>
          <Input placeholder="请输入账号" prefix={ <UserOutlined /> } />
        </Form.Item>
        { /* 密码 */ }
        <Form.Item 
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          }
        ]}
        >
          <Input placeholder="请输入密码" prefix={ <LockOutlined /> } type="password"/>
        </Form.Item>
        {/* 确认密码 */}
        <Form.Item 
        name="confrimpassword"
        rules={[
          {
            required: true,
            message: '请确认密码',
          }
        ]}
        >
          <Input placeholder="请确认密码" prefix={ <LockOutlined /> } type="password"/>
        </Form.Item>
        {/* 登陆操作 */}
        <Form.Item className="login-btn">
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    name: state.nameEn
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
export default connect(mapStateToProps, mapDispatchToProps)(Register)