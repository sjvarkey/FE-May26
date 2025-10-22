import React, { useState } from "react";

const CartItems = ({ products }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (product) => {
    // Prevent duplicates
    setSelectedItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const totalPrice = selectedItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Product List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.name} - ${product.price}
            <button
              onClick={() => handleSelect(product)}
              style={{ marginLeft: 8 }}
            >
              Select
            </button>
          </li>
        ))}
      </ul>

      <h3>Cart Items:</h3>
      {selectedItems.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${totalPrice}</h4>
    </div>
  );
};

export default CartItems;
