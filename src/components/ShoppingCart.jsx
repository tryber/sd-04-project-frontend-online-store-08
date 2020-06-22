import React, { Component } from 'react';
import ProductCart from './ProductCart';
import Empty from './Empty';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      totalPrice: 0,
    };
  }

  render() {
    const { products, totalPrice } = this.state;
    if (products.length === 0) {
      return <Empty />;
    }
    return (
      <div>
        <h3>Shopping Cart</h3>
        {products.map((item) => (
          <div key={item.id}>
            <ProductCart products={item} />
          </div>
        ))}
        <p>{`Valor total: ${totalPrice}`}</p>
        <button type="button" data-testid="checkout-products">
          Checkout
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
