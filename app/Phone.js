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
import React, { useEffect, useState } from 'react';

const Electronics = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/categories';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Limit the categories to only 5
        const formattedData = data.slice(0, 5).map(category => ({
          id: category.id,
          name: category.name,
          image: category.image
        }));

        setCategories(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-title">Featured Categories</h1>
      <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          categories.map(category => (
            <div key={category.id} className="product-item">
              <img
                src={category.image}
                alt={category.name}
                className="product-image"
              />
              <h2 className="product-title">{category.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Electronics;