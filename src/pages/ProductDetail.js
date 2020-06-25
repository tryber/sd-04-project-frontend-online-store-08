import React, { Component } from 'react';
import '../styles/MainPage.css';
import Loading from '../components/Loading';

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
      </section>
    );
  }
}

export default ProductDetail;
