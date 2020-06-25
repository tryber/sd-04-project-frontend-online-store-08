import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { MainPage, ProductDetail, ShoppingCart } from './pages';
import './styles/App.css';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Store</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/item/:id" component={ProductDetail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={ShoppingCart} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
      <footer>
        <h5>Footer</h5>
      </footer>
    </div>
  );
}

export default App;
