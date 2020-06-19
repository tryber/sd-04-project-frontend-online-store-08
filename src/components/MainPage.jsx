import React from 'react';
import './MainPage.css';
import Categories from './Categories';
import { getProductsFromQuery } from '../services/api';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      category: '',
    };
  }

  categoryClick = (event) => {
    this.setState({ category: event.target.id });
  };

  inputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { query } = this.state;
    const { results } = await getProductsFromQuery(query);
    this.setState({ data: results });
  };

  render() {
    const { query, data } = this.state;
    return (
      <section className="container">
        <aside className="Cat-item">
          <Categories onClick={this.categoryClick} />
        </aside>
        <article className="Prod-item">
          <form onSubmit={this.handleSubmit}>
            <input
              data-testid="query-input"
              className="SearchBar"
              type="text"
              value={query}
              onChange={this.inputChange}
            />
            <button type="submit" className="btnSearch">
              Pesquisar
            </button>
          </form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {data.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </article>
      </section>
    );
  }
}

export default MainPage;
