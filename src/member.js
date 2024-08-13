import React, { useEffect, useState } from "react";
import { Breadcrumb, List } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export function Member() {
    // 定義狀態，用於儲存用戶的電子郵件、登入狀態和訂單資料
    const [email, setEmail] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    // 使用 useEffect 鉤子來在組件掛載時檢查用戶的登入狀態
    useEffect(() => {
        // 從 localStorage 中獲取用戶的登入狀態和電子郵件
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        const storedEmail = localStorage.getItem('userEmail');

        // 如果用戶已登入，則更新狀態，並從伺服器獲取用戶的歷史訂單
        if (storedIsLoggedIn === 'true' && storedEmail) {
            setIsLoggedIn(true);
            setEmail(storedEmail);

            // 發送請求到伺服器獲取用戶的歷史訂單
            axios.get('http://localhost/cake/get_orders.php', {
                params: { email: storedEmail }
            })
                .then(response => {
                    if (response.data.error) {
                        console.error('錯誤:', response.data.error);
                    } else {
                        setOrders(response.data.orders);
                    }
                })
                .catch(error => {
                    console.error('取得訂單時發生錯誤:', error);
                });
        }
    }, []); // 只在組件首次掛載時執行

    return (
        <div>
            {/* 麵包屑導航 */}
            <div className="breadcrumb-container">
                <span className="breadcrumb-label">你的位置 :</span>
                <Breadcrumb style={{ backgroundColor: '#ffffff' }}>
                    <Breadcrumb.Item>首頁</Breadcrumb.Item>
                    <Breadcrumb.Item>會員資料</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            {/* 顯示用戶的電子郵件或提示用戶需要登入 */}
            {isLoggedIn ? (
                <div>
                    <h2>歡迎, {email}</h2>
                    <p>這裡是您的會員資料頁面。</p>

                    {/* 顯示歷史訂單 */}
                    <h3>歷史訂單</h3>
                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={orders}
                        renderItem={order => (
                            <List.Item>
                                <div
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #e8e8e8',
                                        borderRadius: '4px',
                                        backgroundColor: '#f5f5f5',
                                        marginTop: '10px',
                                    }}
                                >
                                    <h4>訂單編號: {order.id}</h4>
                                    <p>訂單時間: {order.date}</p>
                                    <p>總金額: NT${order.total}</p>
                                    <h5>訂單詳情</h5>

                                    {/* 顯示每筆訂單的詳細資料 */}
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={order.details}
                                        renderItem={(detail, index) => (
                                            <List.Item
                                                style={{
                                                    padding: '10px 0',
                                                    borderBottom: '1px solid #e8e8e8',
                                                }}
                                            >
                                                <List.Item.Meta
                                                    title={`項目編號: ${index + 1} - 蛋糕名稱: ${detail.cake_name}`}
                                                    description={`數量: ${detail.quantity}, 單價: NT$${detail.price}`}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </List.Item>
                        )}
                    />

                    {/* 登出按鈕 */}
                    <Link to="/logout">
                        <button>登出</button>
                    </Link>
                </div>
            ) : (
                // 如果用戶未登入，顯示登入和註冊按鈕
                <div>
                    <h2 style={{ margin: '20px' }}>會員系統</h2>
                    <div style={{ margin: '20px' }}>
                        <button onClick={() => navigate('/login')}>登入</button>
                        <button onClick={() => navigate('/register')}>註冊新帳號</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Member;
