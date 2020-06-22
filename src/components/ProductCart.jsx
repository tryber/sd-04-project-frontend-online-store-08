import React, { Component } from 'react';
import './ProductCart.css';

class ProductCart extends Component {
  constructor(props) {
    super(props);

    this.state = { quantity: 0 };
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

  render() {
    const { quantity } = this.state;
    const { products } = this.props;
    const { title, price, thumbnail } = products;
    return (
      <div className="product-cart">
        <img src={thumbnail} alt={title} height="90px" />
        <p
          className="product-cart-title"
          data-testid="shopping-cart-product-name"
        >
          {title}
        </p>
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
        <p>{(price * quantity).toFixed(2)}</p>
        <button type="button">X</button>
      </div>
    );
  }
}

export default ProductCart;
