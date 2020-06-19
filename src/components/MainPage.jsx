import React from 'react';
import './MainPage.css';
import Categories from './Categories';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      categorySelected: '',
    };
  }

  categoryClick = (event) => {
    this.setState({ categorySelected: event.target.id });
    console.log(event.target.id);
  };

  render() {
    return (
      <section className="container">
        <aside className="Cat-item">
          <Categories onClick={this.categoryClick} />
        </aside>
        <article className="Prod-item">
          <form action="">
            <input
              data-testid="query-input"
              className="SearchBar"
              type="text"
            />
            <button type="button" className="btnSearch">
              Pesquisar
            </button>
          </form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="container">
            <p>Hello</p>
            <p>Goodbye!</p>
          </div>
        </article>
      </section>
    );
  }
}

export default MainPage;
