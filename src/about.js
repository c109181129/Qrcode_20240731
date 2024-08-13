import React from "react";
import { Breadcrumb } from 'antd'; // 引入 Ant Design 的 Breadcrumb 組件
import './App.css';
import aboutUs from './assets/aboutUs.jpg';

function CustomBreadcrumb() { // 將組件名稱改為 CustomBreadcrumb，避免與原有名稱衝突
    return (
        <div className="breadcrumb-container">
            <Breadcrumb>
                {/* 麵包屑導航 */}
                <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
                {/* 當前頁 */}
                <Breadcrumb.Item>關於我們</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export function About() {
    return (
        <div className="content">
            <CustomBreadcrumb /> {/* 使用自訂的麵包屑導航 */}
            {/* 關於我們的內容 */}
            <img src={aboutUs} alt="About Us" className="about-image" /> {/* 增加一個 className 來進行樣式控制 */}
            <p>這裡是關於我們的介紹內容。</p> {/* 這裡可以添加一些關於我們的文字介紹 */}
        </div>
    );
}

export default About;
