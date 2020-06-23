import React, { Component } from 'react';
import * as api from '../services/api';
import { Categories, SearchBar, ProductCard } from '../components';
import '../styles/MainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      category: '',
      allCategories: [],
    };
    this.inputChange = this.inputChange.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResult = this.renderResultSearchBar.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categories) => this.setState({ allCategories: categories }));
  }

  shouldComponentUpdate() {
    console.log('ok');

    return true;
  }

  inputChange(event) {
    this.setState({ query: event.target.value });
  }

  async categoryClick(event) {
    this.setState({ category: event.target.id });
    const { category, query } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(
      category,
      query,
    );
    this.setState({ data: results });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { category, query } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(
      category,
      query,
    );
    this.setState({ data: results });
  }

  renderResultSearchBar() {
    const { query, data, category } = this.state;
    if (!category && !query) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    if (data.length === 0) {
      return (
        <p data-testid="home-initial-message">
          Não foi possível encontrar nenhum produto.
        </p>
      );
    }
    return data.map((product) => (
      <ProductCard data-testid="product" key={product.id} product={product} />
    ));
  }

  render() {
    const { query, allCategories } = this.state;
    return (
      <section className="container">
        <aside className="Cat-item">
          <Categories onClick={this.categoryClick} allCats={allCategories} />
        </aside>
        <article className="Prod-item">
          <SearchBar oS={this.handleSubmit} v={query} oC={this.inputChange} />
          {this.renderResultSearchBar()}
        </article>
      </section>
    );
  }
}

export default MainPage;
