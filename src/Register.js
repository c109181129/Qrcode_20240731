import React from 'react';
import RegisterForm from './RegisterForm';
import './App.css'; // 如果需要引入样式文件的话

function Register() {
  return (
    <div className="register-container">
      <h1 className="register-title">會員註冊</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;
