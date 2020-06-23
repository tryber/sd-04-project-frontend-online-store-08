import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div className="Card" data-testid="product">
        <div className="Title">
          <p>{title}</p>
        </div>
        <div>
          <img src={thumbnail} alt={id} className="Image" />
          <p>{`Preço: ${price}`}</p>
        </div>
        <div className="Link" data-testid="product-add-to-cart">
          <button type="button">COMPRAR</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
