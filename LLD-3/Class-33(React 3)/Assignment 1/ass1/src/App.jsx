import './App.css';
import ProductCard from './ProductCard';

// Sample product data
const sampleProduct = {
  name: "Smartphone",
  price: 799,
  description: "A powerful device with a great camera and long battery life.",
};

function App() {
  return (
    <div className="App">
      {/* Pass product data to ProductCard */}
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;
