import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import '../styles/ProductCard.css';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="Card" data-testid="product">
      <div className="Title">
        <p>{product.title}</p>
      </div>
      <div>
        <img src={product.thumbnail} alt={product.title} className="Image" />
        <p>{`Preço: ${product.price.toFixed(2)}`}</p>
      </div>
      <div className="Link">
        {/* <button type="button" data-testid="product-add-to-cart">COMPRAR</button> */}
        <div>
          <AddToCart product={product} />
        </div>
      </div>
      <div className="Link">
        <Link
          to={{ pathname: `/item/${product.id}`, state: { product } }} // obj { location: {pathname: /item/${id}, state: {product: {title: "mtorola", id:"mbl"}}}}
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
