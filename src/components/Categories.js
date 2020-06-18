import React, { Component } from 'react';
import './Categories.css';
import * as api from '../services/api'; // importando as funções da API como api

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categories) =>
        this.setState((state) => ({ ...state, categories })),
      );
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="sidebar">
        <h4>Categories</h4>
        {categories.map((category) => (
          <button
            type="button"
            className="categoria"
            data-testid="category"
            key={category.id}
            onClick="função para selecionar a categoria"
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
