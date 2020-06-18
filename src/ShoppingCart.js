import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <span>Voltar</span>
        <div className="shopping-cart-container">
          <p data-testid="shopping-cart-button">Shopping Cart</p>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;