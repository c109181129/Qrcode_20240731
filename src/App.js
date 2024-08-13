import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from './home.js';//使用  default  導出不能用 {}
import Error404 from './404.js';
import { About } from './about.js';
import Cake from './cake.js';
import { Member } from './member.js';
import News from './news.js';
import Cart from './cart.js';
import Contact from './contact.js';
import Login from './Login.js';
import Logout from './logout.js';
import Register from './Register.js';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 從本地存儲加載購物車項目
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // 將購物車項目保存到本地存儲
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (cake) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === cake.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === cake.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...cake, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };
  
  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'cake', element: <Cake onAddProduct={handleAddProduct} /> },
    { path: 'member', element: <Member /> },
    { path: 'news', element: <News /> },
    { path: 'cart', element: <Cart 
      cartItems={cartItems} 
      onRemoveFromCart={handleRemoveFromCart} 
      onUpdateQuantity={handleUpdateQuantity} 
      onClearCart={handleClearCart} 
    /> },
    { path: 'contact', element: <Contact /> },
    { path: 'login', element: <Login /> },
    { path: 'logout', element: <Logout /> },
    { path: 'register', element: <Register /> },
    { path: '*', element: <Error404 /> }
  ]);

  return element;
}

export default App;
