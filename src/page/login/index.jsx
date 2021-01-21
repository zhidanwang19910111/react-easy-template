import React from 'react'
import { Tabs } from 'antd'
import LoginForm from './login.jsx'
import RegisterForm from './register.jsx'
import './index.less'
const { TabPane } = Tabs;
class LoginWrap extends React.Component{
  constructor(props) {
    super(props)
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
                <LoginForm />
              </TabPane>
              {/* 注册 */}
              <TabPane key="2" tab={ <span>注册</span>}>
                <RegisterForm />
              </TabPane>
            </Tabs>

          </div>
        </div>
      </div>
      
    )
  }
}
export default LoginWrap