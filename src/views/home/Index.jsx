import React, { useEffect, useState } from 'react'
import { Space, Table, Tag, Button } from 'antd';

import Hoc_login from '../../utils/Hoc_login'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },

  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>查看 {record.key}</a>
        <a>删除</a>
      </Space>
    ),
  },
];
function Index() {
  let [list, setList] = useState('');
  let input_change = (e) => {
    setList(e.target.value)
  }
  return (
    <div>
      <input type="text" value={list} onChange={input_change.bind(this)} />
      <Button onClick={() => {
        setList((item) => {
          console.log(item);
          return item + 1
        })
      }}>  提交</Button>
    </div>
  )
}

export default Hoc_login(Index)
