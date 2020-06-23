import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { product: { title, price, thumbnail, id } } = props;
  return (
    <div className="Card" data-testid="product">
      <div className="Title">
        <p>{title}</p>
      </div>
      <div>
        <img src={thumbnail} alt={title} className="Image" />
        <p>{`Preço: ${price}`}</p>
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
