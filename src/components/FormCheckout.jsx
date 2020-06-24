import React, { Component } from 'react';
import '../styles/FormCheckout.css';

class FormCheckout extends Component {

  render() {
    const { handler, fullname } = this.props;
    return (
      <form className="form-checkout">
        <h4>Informações do Comprador</h4>
        <label htmlFor="name">
          Nome
          <input className="field" type="text" data-testid="checkout-fullname" name="fullname" value={fullname} onChange={(e) => handler(e)} />
        </label>
        <label htmlFor="email">
          Email
          <input className="field" type="text" data-testid="checkout-email" name="email" value="" onChange={(e) => handler(e)} />
        </label>
        <label htmlFor="cpf">
          CPF
          <input className="field" type="text" data-testid="checkout-cpf" name="cpf" value="" onChange={(e) => handler(e)} />
        </label>
        <label htmlFor="telefone">
          Telefone
          <input className="field" type="text" data-testid="checkout-phone" name="telefone" value="" onChange={(e) => handler(e)} />
        </label>
        <label htmlFor="cep">
          CEP
          <input className="field" type="text" data-testid="checkout-cep" name="cep" value="" onChange={(e) => handler(e)} />
        </label>
        <label htmlFor="endereco">
          Endereço
          <input className="field" type="text" data-testid="checkout-address" name="endereco" value="" onChange={(e) => handler(e)} />
        </label>
      </form>
    );
  }
}

export default FormCheckout;