import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard(props) {
  const { product: { title, price, thumbnail, id } } = props;
  return (
    <div className="Card" data-testid="product">
      <div className="Title">
        <p>{title}</p>
      </div>
      <div>
        <img src={thumbnail} alt={title} className="Image" />
        <p>{`Preço: ${price.toFixed(2)}`}</p>
      </div>
      <div className="Link">
        <button type="button" data-testid="product-add-to-cart">COMPRAR</button>
      </div>
      <div className="Link">
        <Link to={{ pathname: `/item/${id}`, state: { title, thumbnail, price } }} data-testid="product-detail-link">
          Detalhes
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
