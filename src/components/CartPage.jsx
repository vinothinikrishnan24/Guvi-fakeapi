import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage({ cartItems, onRemove, onIncrease, onDecrease }) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [hoveredItem, setHoveredItem] = useState(null);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  useEffect(() => {
    if (cartItems.length === 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate('/products');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [cartItems, navigate]);

  const handleClose = () => {
    navigate('/products');
  };

  return (
    <div style={cartContentStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Your Cart</h2>
        <button style={closeBtnStyle} onClick={handleClose}>
          Close
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p style={emptyCartStyle}>
          Your cart is empty. Redirecting to products in {countdown} seconds...
        </p>
      ) : (
        <>
          <div style={cartItemsStyle}>
            {cartItems.map((item) => (
              <div key={item.id} style={cartItemStyle}>
                <div style={itemDetailsStyle}>
                  <div
                    style={imageContainerStyle}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                    />
                    {hoveredItem === item.id && (
                      <div style={tooltipStyle}>
                        <h4 style={tooltipTitleStyle}>{item.title.slice(0, 20)}...</h4>
                        <p style={tooltipPriceStyle}>₹{item.price}</p>
                        <p style={tooltipDescriptionStyle}>{item.description.slice(0, 50)}...</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
                      {item.title.slice(0, 15)}...
                    </p>
                    <p style={{ margin: '5px 0' }}>
                      ₹{item.price} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div style={quantityStyle}>
                  <button style={quantityBtnStyle} onClick={() => onDecrease(item.id)}>
                    -
                  </button>
                  <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                  <button style={quantityBtnStyle} onClick={() => onIncrease(item.id)}>
                    +
                  </button>
                </div>
                <button style={removeBtnStyle} onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={totalPriceStyle}>
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
            <h3>Discounted Price (10% off): ₹{discountedPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

const cartContentStyle = {
  padding: '15px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  border: '1px solid #ddd',
  borderRadius: '8px',
  minHeight: '200px',
  overflowY: 'auto',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const titleStyle = {
  margin: '0',
  fontSize: '20px',
  color: '#333',
  borderBottom: '2px solid #007bff',
  paddingBottom: '8px',
};

const closeBtnStyle = {
  backgroundColor: '#f48c06',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(244, 140, 6, 0.4)',
  transition: 'transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease',
};

closeBtnStyle[':hover'] = {
  backgroundColor: '#d97706',
  transform: 'scale(1.15)',
  boxShadow: '0 6px 16px rgba(244, 140, 6, 0.6)',
  animation: 'bounce 0.5s ease-in-out',
};

const cartItemsStyle = {
  marginBottom: '15px',
};

const cartItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #eee',
  gap: '20px',
};

const itemDetailsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flex: 1,
};

const quantityStyle = {
  display: 'flex',
  alignItems: 'center',
};

const quantityBtnStyle = {
  backgroundColor: '#1e88e5',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(30, 136, 229, 0.4)',
  transition: 'transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease',
  animation: 'pulse 1.5s infinite',
};

quantityBtnStyle[':hover'] = {
  backgroundColor: '#1565c0',
  transform: 'scale(1.2)',
  boxShadow: '0 6px 16px rgba(30, 136, 229, 0.6)',
  animation: 'none',
};

const removeBtnStyle = {
  backgroundColor: '#7209b7',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(114, 9, 183, 0.4)',
  transition: 'transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease',
};

removeBtnStyle[':hover'] = {
  backgroundColor: '#5a189a',
  transform: 'scale(1.15)',
  boxShadow: '0 6px 16px rgba(114, 9, 183, 0.6)',
  animation: 'spin 0.5s ease-in-out',
};

const emptyCartStyle = {
  textAlign: 'center',
  color: '#666',
  margin: '20px 0',
  fontSize: '16px',
};

const totalPriceStyle = {
  textAlign: 'right',
  marginBottom: '15px',
  padding: '10px 0',
  borderTop: '2px solid #ddd',
};


const imageContainerStyle = {
  position: 'relative',
  display: 'inline-block',
};

const tooltipStyle = {
  position: 'absolute',
  top: '100px',
  left: '100%',
  transform: 'translateY(-50%)',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  zIndex: '10',
  width: '200px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  marginLeft: '15px',
};

const tooltipTitleStyle = {
  fontSize: '14px',
  margin: '0 0 5px 0',
  color: '#fff',
};

const tooltipPriceStyle = {
  fontSize: '12px',
  color: '#ffd700',
  margin: '0 0 5px 0',
  fontWeight: 'bold',
};

const tooltipDescriptionStyle = {
  fontSize: '10px',
  color: '#ddd',
  margin: '0',
};


const keyframes = `
  @keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
`;


const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default CartPage;