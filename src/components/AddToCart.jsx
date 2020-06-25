import React from 'react';

class Storage extends React.Component {
  constructor(props) {
    super(props);

    this.addItems = this.addItems.bind(this);
  }

  addItems() {
    const { product } = this.props;
    if (localStorage.getItem('item')) {
      const itens = JSON.parse(localStorage.getItem('item'));
      const upStorage = localStorage.setItem(
        'item',
        JSON.stringify([...itens, { ...product }]),
      );
      return upStorage;
    }
    const storage = localStorage.setItem('item', JSON.stringify([product]));
    return storage;
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={this.addItems}
      >
        Adicionar ao carrinho
      </button>
    );
  }
}
export default Storage;
