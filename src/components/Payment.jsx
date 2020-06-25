import React, { Component } from 'react';
import '../styles/Payment.css';

class Payment extends Component {
  render() {
    const { handler } = this.props;
    return (
      <form className="form-payment">
        <h4>Método de Pagamento</h4>
        <label htmlFor="payment">
          <input type="radio" name="payment" onChange={handler} />
          Boleto
        </label>
        <label htmlFor="payment">
          <input type="radio" name="payment" onChange={handler} />
          Cartão Crédito Visa
        </label>
        <label htmlFor="payment">
          <input type="radio" name="payment" onChange={handler} />
          Cartão Crédito MasterCard
        </label>
        <label htmlFor="payment">
          <input type="radio" name="payment" onChange={handler} />
          Cartão Crédito Elo
        </label>
      </form>
    );
  }
}

export default Payment;
