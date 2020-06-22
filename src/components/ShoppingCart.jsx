import React, { Component } from 'react';
import ProductCart from './ProductCart';
import data from './testing';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = { products: data };
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
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
    return products.map((item) => <ProductCart item={item} />);
  }
}

export default ShoppingCart;
