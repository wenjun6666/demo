import React from 'react'
import { Modal } from 'antd';
import { Button,  Form, Input } from 'antd';
import {useDispatch} from 'react-redux'
import {FormOutlined} from '@ant-design/icons';
function Edit(props) {
    let { obj,isModal, handleYes, handleNo } = props
    let dispatch=useDispatch();
    const onFinish = (values) => {
            values.key=obj.key;
            dispatch({
                type:'EDIT_TABLE',
                payload:values,
            })
            handleYes();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  return (
    <div>
      <Modal destroyOnClose={true} title={<div><FormOutlined /><span>修改数据</span></div>} open={isModal} onOk={handleYes} onCancel={handleNo}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={obj}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="年龄"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="地址"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
    </div>
  )
}

export default Edit
