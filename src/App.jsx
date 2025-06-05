import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartPage from './components/CartPage.jsx';

function App() {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showAlert, setShowAlert] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        setShowAlert(true);
        return prevItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const totalCartItems = cartItems.length;


  const isMobile = windowWidth < 768;
  const mainContainerStyle = {
    minHeight: 'calc(100vh - 60px)',
    padding: isMobile ? '10px' : '20px',
    paddingTop: '80px',
    boxSizing: 'border-box',
  };

  return (
    <div className="App">
      <Navbar cartCount={totalCartItems} />
      <div style={mainContainerStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductList
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemove={handleRemoveFromCart}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
              />
            }
          />
          <Route path="*" element={<h2>Page Not Found! Go to <a href="/products">Products</a></h2>} />
        </Routes>
      </div>
      {showAlert && (
        <div style={alertOverlayStyle}>
          <div style={alertBoxStyle}>
            <p style={alertMessageStyle}>Item already in cart!</p>
            <button style={alertButtonStyle} onClick={() => setShowAlert(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

const alertOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
};

const alertBoxStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '300px',
};

const alertMessageStyle = {
  margin: '0 0 15px 0',
  fontSize: '16px',
  color: '#333',
};

const alertButtonStyle = {
  backgroundColor: '#ff6200',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '14px',
};

export default AppWrapper;