import React, { Component } from 'react';
import '../styles/FormCheckout.css';

class FormCheckout extends Component {

  render() {
    return (
      <form className="form-checkout">
        <h4>Informações do Comprador</h4>
        <label htmlFor="name">
          Nome
          <input className="field" type="text" data-testid="checkout-fullname" name="name" value="" />
        </label>
        <label htmlFor="email">
          Email
          <input className="field" type="text" data-testid="checkout-email" name="email" value="" />
        </label>
        <label htmlFor="cpf">
          CPF
          <input className="field" type="text" data-testid="checkout-cpf" name="cpf" value="" />
        </label>
        <label htmlFor="telefone">
          Telefone
          <input className="field" type="text" data-testid="checkout-phone" name="telefone" value="" />
        </label>
        <label htmlFor="cep">
          CEP
          <input className="field" type="text" data-testid="checkout-cep" name="cep" value="" />
        </label>
        <label htmlFor="endereco">
          Endereço
          <input className="field" type="text" data-testid="checkout-address" name="endereco" value="" />
        </label>
      </form>
    );
  }
}

export default FormCheckout;