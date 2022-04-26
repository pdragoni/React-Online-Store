import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <Link
          id="button"
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
        <label htmlFor="button">
          <input type="text" placeholder="Insira sua busca" />
          <button type="button">Botão</button>
        </label>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      </div>
    );
  }
}

export default Home;
