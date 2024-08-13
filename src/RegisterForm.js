import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';

function RegisterForm() {
    const navigate = useNavigate();

    // 當表單提交成功時觸發的事件
    const onFinish = async (values) => {
        const { email, password } = values;
        try {
            // 發送 POST 請求到註冊 API
            const response = await axios.post('http://localhost/cake/register.php', {
                email,
                password,
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            const data = response.data;

            // 如果註冊成功，顯示成功訊息並重定向到登入頁面
            if (data.success) {
                message.success('註冊成功');
                navigate('/login');
            } else {
                // 如果註冊失敗，顯示錯誤訊息
                message.error(`註冊失敗：${data.message}`);
            }
        } catch (error) {
            // 捕捉並處理錯誤
            message.error(`註冊出現異常：${error.message}`);
        }
    };

    // 當表單提交失敗時觸發的事件
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="register"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: '請輸入有效的電子郵件地址!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: '請輸入密碼!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    註冊
                </Button>
            </Form.Item>
        </Form>
    );
}

export default RegisterForm;
