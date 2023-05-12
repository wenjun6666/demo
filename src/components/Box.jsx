import React from 'react'
import { Modal } from 'antd';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux'
import { EditOutlined } from '@ant-design/icons';
function Box(props) {
    let { isModalOpen, handleOk, handleCancel, text, obj } = props
    let dispatch = useDispatch();
    const onFinish = (values) => {
        if (!obj.key) {
            values.key = new Date() * 1;
            dispatch({
                type: 'ADD_TABLE',
                payload: values,
            })
            handleOk();
        }else{
            values.key=obj.key;
            dispatch({
                type:'EDIT_TABLE',
                payload:values,
            })
            handleOk();
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Modal destroyOnClose={true} title={<div><EditOutlined /><span>{text}</span></div>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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

export default Box
