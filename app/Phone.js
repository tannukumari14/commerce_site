// import React, { useEffect, useState } from 'react';

// const Phone = () => {
//   const [phones, setPhones] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://api.escuelajs.co/api/v1/products';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Limit to only 5 phones
//         setPhones(data.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
//       <h1 className="product-title">Featured Phones</h1>
//       <div className="product-list">
//         {phones.map((phone) => (
//           <div key={phone.id} className="product-item">
//             {phone.image && (
//               <img
//                 src={phone.image}
//                 alt={phone.title}
//                 className="product-image"
//               />
//             )}
//             <h2 className="product-title">{phone.title}</h2>
//             <p className="product-price">
//               Price: {phone.price ? `$${phone.price.toFixed(2)}` : 'N/A'}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Phone;


// Product.js or Phone.js

import React, { useEffect, useState } from 'react';

const Product = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Limit to only 5 items
        setItems(data.slice(0, 5));
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
        {items.map((item) => (
          <div key={item.id} className="product-item">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />
            ) : (
              <div className="product-no-image">No Image Available</div>
            )}
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">
              Price: {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

