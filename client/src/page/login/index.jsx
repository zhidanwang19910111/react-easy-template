import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import axios from '@/lib/util/axios'
import Api from './api/index'
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  login() {
    let { username, password } = this.state
    let params = {
      username,
      password
    }
    // axios.post(Api.login, )
  }
  userNameChange( e ) {
    this.setState({
      username: e.target.value
    })
  }
  passwordChange( e ) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div className="ig-login-wrap">
        <div className="ig-login-content">
          <div className="title"> ITerGet OA </div>
          <div className="login-input">
            <Form>
              <Form.Item 
              name="username" 
              rules={[
                {
                  required: true,
                  message: '请输入账号'
                }
              ]}>
                <Input placeholder="请输入账号" onChange={this.userNameChange}/>
              </Form.Item>
              <Form.Item 
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码'
                }
              ]}
              >
                <Input placeholder="请输入密码" type="password" onChange={this.passwordChange} />
              </Form.Item>

              <Form.Item className="login-btn">
                <Button type="primary" onClick={this.login}>登陆</Button>
              </Form.Item>
            </Form>
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
export default connect()(Login)