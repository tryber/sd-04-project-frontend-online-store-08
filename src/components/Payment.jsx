import React, { Component } from 'react';
import '../styles/Payment.css';

class Payment extends Component {
  render() {
    return (
      <form className="form-payment">
        <h4>Método de Pagamento</h4>
        <label htmlFor="boleto">
          <input type="radio" name="boleto" value="boleto" />
          Boleto
        </label>
        <label htmlFor="visa">
          <input type="radio" name="visa" value="visa" />
          Cartão Crédito Visa
        </label>
        <label htmlFor="visa">
          <input type="radio" name="master" value="master" />
          Cartão Crédito MasterCard
        </label>
        <label htmlFor="visa">
          <input type="radio" name="elo" value="elo" />
          Cartão Crédito Elo
        </label>
      </form>
    );
  }
}

export default Payment;
