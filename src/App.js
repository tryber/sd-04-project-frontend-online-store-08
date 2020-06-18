import React from 'react';
import './App.css';
import Categories from './components/Categories';

import ProductsList from './components/ProductsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form action="">
            <input
              data-testid="query-input"
              className="SearchBar"
              type="text"
            />
          </form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
        <section>
          <ProductsList />
        </section>
      </div>
    );
  }
}

export default App;
