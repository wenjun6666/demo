import { Button,  Form, Input } from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Login = () => {
    let navigate=useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.get('/api/login',{
            params:{
                user:values.user,
                pwd:values.pwd
            }
        }).then(res=>{
            if(res.data.code===200){
                alert(res.data.msg);
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',res.data.user);
                navigate('/home/index');
            }else{
                alert(res.data.msg);
            }
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
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
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="user"
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
                    label="密码"
                    name="pwd"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
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
            </Form></div>
    )

};
export default Login;