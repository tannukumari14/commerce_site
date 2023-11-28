import React, { useEffect, useState } from 'react';

const Phone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Limit to only 5 products
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-title">Featured Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            )}
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">
              Price: {product.price ? `$${product.price.toFixed(2)}` : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phone;
