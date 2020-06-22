import React, { Component } from 'react';
import '../styles/MainPage.css';
import * as api from '../services/api';
import Loading from '../components/Loading';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      success: false,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    api.getProductFromID(id).then((product) => {
      this.setState({ product, success: true });
    });
  }

  render() {
    const { product, success } = this.state;
    if (!success) return <Loading />;
    return (
      <section className="container">
        <div className="item">TESTE</div>
      </section>
    );
  }
}

export default ProductDetail;
