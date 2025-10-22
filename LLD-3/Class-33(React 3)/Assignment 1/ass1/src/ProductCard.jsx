import { useState } from "react";

const ProductCard = ({ product }) => {
  // Define state to manage the visibility of product details
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((s) => !s);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        maxWidth: "300px",
        margin: "10px auto",
      }}
    >
      <h2>Product: {product.name}</h2>
      <p>Price: ${product.price}</p>

      {showDetails && <p>Description: {product.description}</p>}

      <button onClick={toggleDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
    </div>
  );
};

export default ProductCard;