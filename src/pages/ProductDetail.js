import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import Loading from '../components/Loading';
import AddToCart from '../components/AddToCart';
import logo from '../imgs/logo.svg';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      success: false,
    };
    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    this.setProduct();
  }

  setProduct() {
    const { location: { state: { product } } } = this.props;
    this.setState({ product, success: true });
  }

  render() {
    const { product: { thumbnail, title, price }, success } = this.state;
    if (!success) return <Loading />;
    return (
      <section className="container">
        <div className="item" data-testid="product-detail-name">{title}</div>
        <img src={thumbnail} alt="" />
        <div className="item">
          R$
          {price}
        </div>
        <input type="text" data-testid="product-detail-evaluation" />
        <div data-testid="product-detail-add-to-cart">
          <AddToCart product={this.props.location.state} />
        </div>
        <Link to="/cart">
          <img data-testid="shopping-cart-button" src={logo} alt="cart" height={40} />
        </Link>
      </section>
    );
  }
}

export default ProductDetail;
