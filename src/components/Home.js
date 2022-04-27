import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
    };
  }

  async componentDidMount() {
    const resultado = await getCategories();
    // console.log(resultado);
    this.setState({
      categorias: resultado,
    });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div data-testid="home-initial-message">
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
        <br />
        <br />

        <label htmlFor="button">
          <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
          <input id="button" type="text" placeholder="Insira sua busca" />
          <button type="button">Botão</button>
        </label>
        <br />
        <br />
        <section>
          {
            categorias.length > 0
              ? (categorias.map((cat) => (
                <button
                  key={ cat.id }
                  type="button"
                  data-testid="category"
                >
                  { cat.name }
                </button>
              ))) : null
          }
        </section>
      </div>
    );
  }
}

export default Home;
