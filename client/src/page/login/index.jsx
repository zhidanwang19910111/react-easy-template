import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
class Login extends React.Component{
  constructor(props) {
    super(props)
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
                <Input placeholder="请输入账号" />
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
                <Input placeholder="请输入密码" type="password" />
              </Form.Item>

              <Form.Item className="login-btn">
                <Button type="primary">登陆</Button>
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