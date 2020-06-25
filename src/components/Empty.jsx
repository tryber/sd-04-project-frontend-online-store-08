import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Empty extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <Link to="/">
          <span>Voltar</span>
        </Link>
        <div className="shopping-cart-container">
          <p data-testid="shopping-cart-button">Shopping Cart</p>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      </div>
    );
  }
}

export default Empty;
