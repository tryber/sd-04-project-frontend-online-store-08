import React from 'react';

function ProductCard(props) {
  const { product } = props;
  const { title, price, thumbnail, id } = product;
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
        <Link>
          Detalhes
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
