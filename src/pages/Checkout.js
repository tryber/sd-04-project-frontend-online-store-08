import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormCheckout from '../components/FormCheckout';
import Payment from '../components/Payment';
import ProductCart from '../components/ProductCart';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <div>PRODUTOS</div>
        <FormCheckout
          handler={this.handlerChange}
          fullname={fullname}
          email={email}
          cpf={cpf}
          phone={phone}
          cep={cep}
          address={address}
        />
        <Payment handler={this.handlerChange} />
        <Link to="/">
          <button type="button">VOLTAR</button>
        </Link>
        <Link to="/checkout">
          <button type="button">FINALIZAR</button>
        </Link>
      </div>
    );
  }
}

export default Checkout;
