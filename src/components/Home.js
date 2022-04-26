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
          id="button"
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
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
        <br />
        <br />

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
