import React, { Component } from 'react';
import '../styles/ProductCart.css';

class ProductCart extends Component {
  constructor(props) {
    super(props);

    this.state = { quantity: 1 };
  }

  plusQuantity() {
    this.setState((state) => ({ quantity: state.quantity + 1 }));
  }

  minusQuantity() {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState((state) => ({ quantity: state.quantity - 1 }));
    }
  }

  renderQuantity() {
    const { quantity } = this.state;
    return (
      <div className="product-cart-quantity">
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={() => this.minusQuantity()}
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={() => this.plusQuantity()}
        >
          +
        </button>
      </div>
    );
  }

  render() {
    const { quantity } = this.state;
    const { products } = this.props;
    const { product: { title, price, thumbnail, id } } = products;
    return (
      <div className="product-cart">
        <img src={thumbnail} alt={id} height="90px" />
        <p
          className="product-cart-title"
          data-testid="shopping-cart-product-name"
        >
          {title}
        </p>
        {this.renderQuantity()}
        <p>{(price * quantity).toFixed(2)}</p>
        <button type="button">X</button>
      </div>
    );
  }
}

export default ProductCart;
