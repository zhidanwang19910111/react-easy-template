import React from 'react'
import { DatePicker } from 'antd'
import './index.less'
class App extends React.Component{
  render() {
    return (
      <div>
        <div className="router-id">我是路由时间戳</div>
        <DatePicker/>
      </div>
      
    )
  }
}
export default App