import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon, Tabs } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '@/lib/util/axios.js'
import Api from './api/index.js'
import './index.less'
const { TabPane } = Tabs;
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  onFinish( e ) {
    let { password, username } = e
    let params = {
      password,
      username
    }
    this.props.login(params)
    .then( res => {
      this.props.history.push('/')
    })
  }
  onRegister( e ) {

  }
  render() {
    return (
      <div className="ig-login-wrap">
        <div className="ig-login-content">
          <div className="title"> Easy API </div>
          <div className="login-input">
            
            <Tabs defaultActiveKey="1" tabBarStyle={{ border: 'none' }}> 
              {/* 登陆 */}
              <TabPane key="1" tab={ <span>登陆</span>}>
                <Form size="large"
                onFinish={this.onFinish.bind(this)}
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
                  {/* 登陆操作 */}
                  <Form.Item className="login-btn">
                    <Button type="primary" htmlType="submit">登陆</Button>
                  </Form.Item>
                </Form>
              </TabPane>
              {/* 注册 */}
              <TabPane key="2" tab={ <span>注册</span>}>
                <Form size="large"
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
                  name="password"
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
              </TabPane>
            </Tabs>

          </div>
        </div>
      </div>
      
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
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)