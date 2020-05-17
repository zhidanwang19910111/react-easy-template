import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'

// 引入antd 样式
import 'antd/dist/antd.css'
ReactDOM.render(
  <AppRouter></AppRouter>
  ,document.getElementById('app')
)