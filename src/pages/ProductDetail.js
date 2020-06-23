import React, { Component } from 'react';
import '../styles/MainPage.css';
import Loading from '../components/Loading';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      success: false,
    };
  }

  componentDidMount() {
    const { location: { state: { title, thumbnail, price } } } = this.props;
    this.setState({ title, thumbnail, price, success: true });
  }

  render() {
    const { title, thumbnail, price, success } = this.state;
    if (!success) return <Loading />;
    return (
      <section className="container">
        <div className="item" data-testid="product-detail-name">{title}</div>
        <img src={thumbnail} alt="" />
        <div className="item">
          R$
          {price}
        </div>
      </section>
    );
  }
}

export default ProductDetail;
