import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <div className="shopping-cart">
          <span>Voltar</span>
          <div className="shopping-cart-container">
            <p data-testid="shopping-cart-button">Shopping Cart</p>
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          </div>
        </div>
      );
    }
    return <div>Componentes do carrinho</div>;
  }
}

export default ShoppingCart;
