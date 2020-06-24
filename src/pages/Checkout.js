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

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log('usando');
  }

  render() {
    const { fullname } = this.state;
    return (
      <div>
        <FormCheckout handler={this.handlerChange} value={fullname} />
        <Payment />
      </div>
    );
  }
}

export default Checkout;
