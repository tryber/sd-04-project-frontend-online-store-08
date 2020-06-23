import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Store</h1>
        <div datatestid="shopping-cart-button">*Icone do carrinho*</div>
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
