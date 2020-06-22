import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
// import ProductCart from './components/ProductCart';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Store</h1>
      </header>
      <MainPage />
      <footer>
        <h5>Footer</h5>
        <ShoppingCart />
      </footer>
    </div>
  );
}

export default App;
