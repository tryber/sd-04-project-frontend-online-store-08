import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductCart, Empty } from '../components';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const storageProducts = JSON.parse(localStorage.getItem('item'));
    console.log();
    this.state = {
      products: storageProducts,
      totalPrice: 0,
    };
  }

  render() {
    const { products, totalPrice } = this.state;
    if (products && products.length !== 0) {
      return (
        <div>
          <h3>Shopping Cart</h3>
          {products.map((item) => (
            <div>
              <ProductCart key={item.product.id} products={item} />
            </div>
          ))}
          <p>{`Valor total: ${totalPrice}`}</p>
          <Link to="/checkout">
            <button type="button" data-testid="checkout-products">
              Checkout
            </button>
          </Link>
        </div>
      );
    }
    return <Empty />;
  }
}

export default ShoppingCart;
