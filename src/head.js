import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

export function Head() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedIsLoggedIn === 'true');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div style={{
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'pink',
            width: '100%',
        }}>
            <Menu mode="horizontal" style={{ backgroundColor: 'pink', width: '100%', flexWrap: 'nowrap', fontSize: '20px' }}>
                <Menu.Item key="logo" disabled>
                    <Link to="/">
                        <img src="./logo.jpg" alt="Logo" style={{
                            height: '40px',
                            width: 'auto',
                            marginRight: '20px',
                        }} />
                    </Link>
                </Menu.Item>

                <Menu.Item key="home">
                    <Link to="/">首頁</Link>
                </Menu.Item>
                <Menu.Item key="news">
                    <Link to="/news">最新活動</Link>
                </Menu.Item>
                <Menu.Item key="cake">
                    <Link to="/cake">蛋糕口味</Link>
                </Menu.Item>
                <Menu.Item key="member">
                    <Link to="/member">會員資料</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">關於我們</Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <Link to="/contact">聯絡我們</Link>
                </Menu.Item>
                <Menu.Item key="cart">
                    <Link to="/cart">
                        <ShoppingCartOutlined style={{ fontSize: '24px', marginRight: '8px' }} /> 購物車
                    </Link>
                </Menu.Item>
                <Menu.Item key="phone" disabled style={{
                    cursor: 'default',
                    color: 'rgba(0, 0, 0, 1)',
                    fontWeight: 'bold',
                    padding: '0 15px',
                }}>
                    訂購專線:07-666-8888
                </Menu.Item>

            </Menu>
        </div>
    );
}

export default Head;

