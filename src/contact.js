import React from "react";
import { Breadcrumb } from 'antd';
import './App.css';

function BreadCrumbs() {
    return (
        <div className="breadcrumb-container">
            <span className="breadcrumb-label">你的位置 :</span>
            <Breadcrumb style={{ backgroundColor: '#ffffff', display: 'inline-flex', verticalAlign: 'middle' }}>
                <Breadcrumb.Item>首頁</Breadcrumb.Item>
                <Breadcrumb.Item>聯絡我們</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export function Contact() {
    return (
        <div className="content-cake">
            <BreadCrumbs />
            <div className="contact-info">
                <h2>聯絡我們</h2>
                <p>地址: 高雄科技大學燕巢校區</p>
                <p>高雄市燕巢區高科路415號</p>
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <footer className="footer">
                <p>© 2024 你的公司名稱. 版權所有.</p>
            </footer>
        </div>
    );
}

export default Contact;
