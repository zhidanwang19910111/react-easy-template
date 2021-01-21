import React from 'react'
import axios from '@/lib/util/axios'
import Api from './api/index'
import { Input, Button, Table, DatePicker } from 'antd'
class Main extends React.Component{
  constructor( props ){
    super( props )
    this.state = {
      form: {
        api: '',
        puserId: '',
        errorNo: '',
        beginCreateTime: '',
        endCreateTime: '',
      },
      tableData: {
        data: [],
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      columns: [
        { title: 'api', key: 'api', dataIndex: 'api' },
        { title: 'apiName', key: 'apiName', dataIndex: 'apiName' }
      ]
    }
  }
  componentDidMount() {
    this.getSystemLogList()
    .then( res => {
      
    })
  }
  getSystemLogList() {
    let { pageNum, pageSize } = this.state.tableData 
    let form = this.state.form
    let params = {
      pageNum,
      pageSize,
      access_token: 'Na7BmGVX3Dow2YnxjZDWfQiEiE'
    }
    for( let key in form ) {
      params[key] = form[key]
    }
    return axios.get(Api.systemLogList, params )
    .then( res => {
      if( res.success ) {
        let result = res.data.list || []
        let apiArr = [], logArr = []
        for( let item of result ) {
          apiArr.push( item.sysApi )
          logArr.push( item.sysApiLog)
        }
        let resultColumns = []
        if( apiArr[0] ) {
          for( let key in apiArr[0] ) {
            resultColumns.push({
              title: key,
              key: key, 
              dataIndex: key
            })
          }
        }else{
          resultColumns = this.state.columns
        }
        let tableData = this.state.tableData
        tableData.data = apiArr
        tableData.total = res.data.total
        this.setState({
          columns: resultColumns,
          tableData: tableData
        })
      }
    })
  }
  inputChange(e, type) {
    let { value } = e.target
    let form = this.state.form
    form[type] = value
    this.setState({
      form: form
    })
  }
  dateChange(arg, type) {
    let value = [...arg]
    let form = this.state.form
    form[type] = value[1]
    this.setState({
      form: form
    })
  }
  render() {
    return (
      <div className="system-log-page">
        <Input placeholder="请输入api" onChange={ (e) => { this.inputChange(e, 'api')} } />
        <Input placeholder="请输入用户id" onChange={ (e) => { this.inputChange(e, 'puserId')} } />
        <Input placeholder="请输入错误码" onChange={ (e) => { this.inputChange(e, 'errorNo')} }/>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={(...arg) => { this.dateChange(arg, 'beginCreateTime')}} />
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={(...arg) => { this.dateChange(arg, 'endCreateTime')}} />


        <Button type="primary" size="large" onClick={()=>{ this.getSystemLogList() }}>搜索</Button>

        <Table columns={this.state.columns} dataSource={this.state.tableData.data} rowKey={ row => row.id } />
      </div>
      
    )
  }
}
export default Main