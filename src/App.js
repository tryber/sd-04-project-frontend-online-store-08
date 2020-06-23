import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { MainPage, ProductDetail } from './pages';
import ShoppingCart from './components/ShoppingCart';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Store</h1>
        <div datatestid="shopping-cart-button">*Icone do carrinho*</div>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/item/:id" component={ProductDetail} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
      <footer>
        <h5>Footer</h5>
        <ShoppingCart />
      </footer>
    </div>
  );
}

export default App;
