import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';

function LoginForm() {
  const navigate = useNavigate();

  // 處理表單提交成功後的邏輯
  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const response = await axios.post('http://localhost/cake/login.php', {
        email,
        password,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      console.log('從伺服器收到的回應:', data);

      if (data.success) {
        message.success('登入成功');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        console.log('登入成功');
        navigate('/member');
      } else {
        message.error('登入失敗: ' + data.message);
      }
    } catch (error) {
      console.error('錯誤:', error);
      message.error('發生錯誤，請稍後再試');
    }
  };

  // 處理表單提交失敗後的邏輯
  const onFinishFailed = (errorInfo) => {
    console.log('表單提交失敗:', errorInfo);
    message.error('表單提交失敗，請檢查輸入內容');
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="電子郵件"
        name="email"
        rules={[{ required: true, message: '請輸入您的電子郵件!' }]}
      >
        <Input placeholder="電子郵件" />
      </Form.Item>

      <Form.Item
        label="密碼"
        name="password"
        rules={[{ required: true, message: '請輸入您的密碼!' }]}
      >
        <Input.Password placeholder="密碼" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登入
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
