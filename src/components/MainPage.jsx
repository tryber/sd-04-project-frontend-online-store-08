import React from 'react';
import './MainPage.css';
import Categories from './Categories';
import * as api from '../services/api';
import SearchBar from './SearchBar';

class MainPage extends React.Component {
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
    this.renderResult = this.renderResult.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categories) => this.setState({ allCategories: categories }));
  }

  inputChange(event) {
    this.setState({ query: event.target.value });
  }

  categoryClick(event) {
    this.setState({ category: event.target.id });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { category, query } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(
      category,
      query
    );
    this.setState({ data: results });
  }

  renderResult() {
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
    return data.map(({ id, title }) => (
      <li data-testid="product" key={id}>
        {title}
      </li>
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
          {this.renderResult()}
        </article>
      </section>
    );
  }
}

export default MainPage;
