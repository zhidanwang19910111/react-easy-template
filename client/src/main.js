import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import { Provider } from 'react-redux'
import store from './redux/store'
// 重置样式
import '@/lib/style/reset.css'
// 引入antd 样式
import 'antd/dist/antd.css'
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  ,document.getElementById('app')
)