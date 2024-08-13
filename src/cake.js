import React from "react";
import { Breadcrumb, Card, Button } from 'antd';
import './App.css';

const { Meta } = Card;

function BreadCrumbs() {
    return (
        <div className="breadcrumb-container">
            <span className="breadcrumb-label">你的位置 :</span>
            <Breadcrumb style={{ backgroundColor: '#ffffff', display: 'inline-flex', verticalAlign: 'middle' }}>
                <Breadcrumb.Item>首頁</Breadcrumb.Item>
                <Breadcrumb.Item>蛋糕口味</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

function CakeCard({ cake, onAddToCart }) {
    return (
        <Card
            hoverable
            className="cake-card"
            cover={<img alt={cake.title} src={cake.image} />}
        >
            <Meta title={cake.title} description={`價格: NT$${cake.price}`} />
            <Button onClick={() => onAddToCart(cake)} style={{ marginTop: '10px' }}>
                加入購物車
            </Button>
        </Card>
    );
}

export function Cake({ onAddToCart }) {
    const cakes = [
        { id: 1, title: '芋頭冰淇淋', price: 599, image: '230501-官網-芋頭冰淇淋-1080x-360x360.jpg' },
        { id: 2, title: '芋冰磚蛋糕 6 吋', price: 499, image: '芋冰磚蛋糕 6 吋-含運組.jpg' },
        { id: 3, title: '芋香卷心蛋糕', price: 360, image: '芋香卷心蛋糕.jpg' },
        { id: 4, title: '紅豆冰磚蛋糕 6 吋', price: 499, image: '紅豆冰磚蛋糕 6 吋-含運組.jpg' },
        { id: 5, title: '夏季限定-冰磚蛋糕任搭組', price: 799, image: '夏季限定-冰磚蛋糕任搭組.jpg' },
        { id: 6, title: '夏季限定-精緻雪藏系列任選組', price: 599, image: '夏季限定-精緻雪藏系列任選組.jpg' },
        { id: 7, title: '經典芋泥蛋糕卷', price: 420, image: '經典芋泥蛋糕卷.jpg' },
        { id: 8, title: '雙層芋泥蛋糕', price: 300, image: '雙層芋泥蛋糕.jpg' },
        { id: 9, title: '芋冰磚蛋糕-夏季限定', price: 420, image: '芋冰磚蛋糕-夏季限定.jpg' },
    ];

    return (
        <div className="content-cake">
            <BreadCrumbs />
            <div className="cake-card-container">
                {cakes.map(cake => (
                    <CakeCard key={cake.id} cake={cake} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
}

export default Cake;
