import React, { useState, useEffect } from 'react';

function ProductList({ cartItems, onAddToCart, onRemoveFromCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={productsGridStyle}>
        {products.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);

          return (
            <div key={product.id} style={productCardStyle}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
              <h3 style={productTitleStyle}>{product.title}</h3>
              <p style={priceStyle}>₹{product.price}</p>
              <p style={descriptionStyle}>{product.description.slice(0, 50)}...</p>
              {isInCart ? (
                <button
                  style={removeFromCartBtnStyle}
                  onClick={() => onRemoveFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  style={addToCartBtnStyle}
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  minHeight: '100vh',
  boxSizing: 'border-box',
  marginTop: '70px',
};

const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
};

const productCardStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.2s ease',
};

productCardStyle[':hover'] = {
  transform: 'scale(1.05)',
};

const productTitleStyle = {
  fontSize: '16px',
  margin: '10px 0',
  color: '#333',
};

const priceStyle = {
  fontSize: '14px',
  color: '#e91e63',
  margin: '5px 0',
  fontWeight: 'bold',
};

const descriptionStyle = {
  fontSize: '12px',
  color: '#666',
  margin: '5px 0',
};

const addToCartBtnStyle = {
  backgroundColor: '#1e88e5',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(30, 136, 229, 0.4)',
  transition: 'transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease',
  animation: 'pulse 1.5s infinite',
};

addToCartBtnStyle[':hover'] = {
  backgroundColor: '#1565c0',
  transform: 'scale(1.15)',
  boxShadow: '0 6px 16px rgba(30, 136, 229, 0.6)',
  animation: 'none',
};

const removeFromCartBtnStyle = {
  backgroundColor: '#ff4d4f',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(255, 77, 79, 0.4)',
  transition: 'transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease',
};

removeFromCartBtnStyle[':hover'] = {
  backgroundColor: '#d9363e',
  transform: 'scale(1.15)',
  boxShadow: '0 6px 16px rgba(255, 77, 79, 0.6)',
};

const keyframes = `
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

export default ProductList;
