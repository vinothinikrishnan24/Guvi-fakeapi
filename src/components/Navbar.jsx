import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ cartCount }) {
  const taglines = [
    '🎉 Big Sale Today! 🎉',
    '🛒 Happy Shopping! 🛒',
    '✨ New Arrivals! ✨',
    '💖 Shop with Love! 💖',
    '🚚 Free Shipping! 🚚',
  ];

  const [currentTagline, setCurrentTagline] = useState(taglines[0]);
  const [fade, setFade] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * taglines.length);
        setCurrentTagline(taglines[randomIndex]);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleProductsClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      setShowAlert(true);
    }
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
    padding: '10px 20px',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    boxSizing: 'border-box',
    zIndex: 2000,
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: "'Dancing Script', cursive",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    color: '#fff',
    flex: '0 0 auto',
  };

  const shopIconStyle = {
    marginRight: '8px',
    fontSize: '20px',
  };

  const taglineStyle = {
    flex: '1 1 auto',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    opacity: fade ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    margin: '0 10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '10px',
    flex: '0 0 auto',
    marginRight: '20px',
  };

  const buttonStyle = {
    padding: '6px 12px',
    backgroundColor: '#ffffff',
    color: '#e52e71',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  buttonStyle[':hover'] = {
    backgroundColor: '#f0f0f0',
    transform: 'scale(1.05)',
  };

  const rightIconsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flex: '0 0 auto',
  };

  const cartStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const cartIconStyle = {
    fontSize: '24px',
  };

  const cartCountStyle = {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const userIconStyle = {
    fontSize: '24px',
    cursor: 'pointer',
  };

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

  return (
    <>
      <div style={navbarStyle}>
        <div style={logoStyle}>
          <span style={shopIconStyle}>🛍️</span>
          Shopping App
        </div>
        <div style={taglineStyle}>
          {currentTagline}
        </div>
        <div style={buttonsContainerStyle}>
          <Link to="/" style={buttonStyle} onClick={handleProductsClick}>
            Products
          </Link>
        </div>
        <div style={rightIconsStyle}>
          <div style={cartStyle}>
            <Link to="/cart">
              <span style={cartIconStyle}>🛒</span>
              {cartCount > 0 && (
                <span style={cartCountStyle}>{cartCount}</span>
              )}
            </Link>
          </div>
          <span style={userIconStyle}>👤</span>
        </div>
      </div>
      {showAlert && (
        <div style={alertOverlayStyle}>
          <div style={alertBoxStyle}>
            <p style={alertMessageStyle}>You are already in the home page or product page itself</p>
            <button style={alertButtonStyle} onClick={() => setShowAlert(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
