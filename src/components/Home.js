import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
      busca: '',
      result: 0,
    };
  }

  async componentDidMount() {
    const resultado = await getCategories();
    // console.log(resultado);
    this.setState({
      categorias: resultado,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      busca: target.value,
    });
  }

  handleButton = async () => {
    const { busca } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(busca);
    this.setState({
      categorias: [...produtos.results],
      result: produtos.results.length,
    });
    console.log(produtos);
  }

  render() {
    const {
      categorias,
      result,
    } = this.state;
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
          <input
            placeholder="Insira sua busca"
            data-testid="query-input"
            type="text"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleButton }
          >
            Pesquisar
          </button>
        </label>
        { result > 0 ? (
          categorias.map(({ title, price, thumbnail, id }) => (<Products
            key={ id }
            title={ title }
            price={ price }
            thumbnail={ thumbnail }
          />))
        ) : <h5>Nenhum produto foi encontrado</h5>}
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
