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
    const { onClick } = this.props;
    return (
      <div className="sidebar">
        <h4>Categories</h4>
        {categories.map(({ name, id }) => (
          <label htmlFor={name}>
            <input
              type="radio"
              className="categoria"
              data-testid="category"
              key={id}
              id={name}
              name="category"
              onClick={(event) => onClick(event)}
            />
            {name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
