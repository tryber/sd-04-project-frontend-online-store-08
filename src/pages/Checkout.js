import React, { Component } from 'react';
import FormCheckout from '../components/FormCheckout';
import Payment from '../components/Payment';

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
      payment: '',
    };
  }
  render() {
    return (
      <div>
        <FormCheckout />
        <Payment />
      </div>
    );
  }
}

export default Checkout;
