import './App.css';
import CartItems from './CartItems';

function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 }
  ];
  return (
    <div className="App">
      <CartItems products={products} />
    </div>
  );
}

export default App;
