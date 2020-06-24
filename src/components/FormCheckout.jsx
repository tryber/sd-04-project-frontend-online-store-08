import React, { Component } from 'react';
import '../styles/FormCheckout.css';

const createInput = (label, name, value, testid, callback) => {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type="text"
        data-testid={testid}
        value={value}
        name={name}
        className="input"
        onChange={callback}
      />
    </label>
  );
};

class FormCheckout extends Component {
  render() {
    const { handler, fullname, email, cpf, phone, cep, address } = this.props;
    return (
      <form className="form-checkout">
        <h4>Informações do Comprador</h4>
        {createInput('Nome', 'fullname', fullname, 'checkout-fullname', handler)}
        {createInput('Email', 'email', email, 'checkout-email', handler)}
        {createInput('CPF', 'cpf', cpf, 'checkout-cpf', handler)}
        {createInput('Telefone', 'phone', phone, 'checkout-phone', handler)}
        {createInput('CEP', 'cep', cep, 'checkout-cep', handler)}
        {createInput('Endereço', 'address', address, 'checkout-address', handler)}
      </form>
    );
  }
}

export default FormCheckout;
