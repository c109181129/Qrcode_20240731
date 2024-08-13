import React from "react";
import { Breadcrumb, Button, List, message } from 'antd';
import axios from 'axios';
import './App.css';

function BreadCrumbs() {
  return (
    <div className="breadcrumb">
      <Breadcrumb>
        <span className="breadcrumb-label">Location:</span>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Application Center</Breadcrumb.Item>
        {/* 可以在這裡添加更多 Breadcrumb.Item */}
      </Breadcrumb>
    </div>
  );
}

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity, onClearCart }) {
  // 計算購物車總金額
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 提交訂單
  const handlePlaceOrder = async () => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      message.error('請先登入');
      return;
    }
    
    try {
      const response = await axios.post('/cartlist/cart/save_order.php', {
        total: calculateTotal(),
        items: cartItems,
      });

      console.log(response.data); // 訂單資訊

      if (response.data.success === '1') {
        message.success('訂單已成功提交！');
        if (typeof onClearCart === 'function') {
          onClearCart(); // 清空購物車
        } else {
          console.error('onClearCart is not a function');
          message.error('未知錯誤');
        }
      } else {
        message.error(`訂單提交失敗：${response.data.message || '未知錯誤'}`);
      }
    } catch (error) {
      message.error(`訂單提交失敗：${error.message}`);
    }
  };

  return (
    <div className="content-cake">
      <BreadCrumbs />
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item
            actions={[
              <Button onClick={() => onRemoveFromCart(item.id)}>刪除</Button>,
              <Button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>增加</Button>,
              <Button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>減少</Button>,
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={`價格: NT$${item.price} x ${item.quantity}`}
            />
          </List.Item>
        )}
      />
      <div className="total-price">
        <h2>總金額: NT$ {calculateTotal()}</h2>
      </div>
      <Button onClick={handlePlaceOrder} type="primary">結帳</Button>
    </div>
  );
}

export default Cart;
