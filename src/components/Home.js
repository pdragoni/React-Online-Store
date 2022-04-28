import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories,
  getProductsFromCategoryAndQuery,
  getProductsFromQuery,
  getProductsDetails } from '../services/api';
import '../index.css';
import Products from './Products';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
      produtos: [],
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

  byCategory = async (id) => { // pego o alvo do clique
    const products = await getProductsFromCategoryAndQuery(id);
    console.log(products.results);
    this.setState({
      produtos: products.results,
      result: products.results.length,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      busca: target.value,
    });
  }

  handleButton = async () => {
    const { busca } = this.state;
    console.log(busca);
    const products = await getProductsFromQuery(busca);
    this.setState({
      produtos: products.results,
      result: products.results.length,
    });
  }

  details = async (id) => { // FUNÇÃO NÃO FINALIZADA
    const detalhes = await getProductsDetails(id);
    console.log(detalhes);
  }

  render() {
    const {
      categorias,
      result,
      produtos,
    } = this.state;
    return (
      <div data-testid="home-initial-message">
        <Link
          className="carrinho"
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
        <br />
        <br />
        <h4
          className="digite"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <label className="homeLabel" htmlFor="button">
          <input
            id="button"
            type="text"
            placeholder="Insira sua busca"
            data-testid="query-input"
            onChange={ this.handleChange }
            className="pesquisa"
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
          produtos.map(({ title, price, thumbnail, id }) => (
            <Products
              key={ id }
              id={ id } // EDIÇÃO REVISÁVEL
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
              onClick={ () => this.details(id) } // requisição pra api usando esse id - EDIÇÃO REVISÁVEL
            />
          ))
        ) : <h5>Nenhum produto foi encontrado</h5>}
        <br />
        <br />
        <section className="categorias">
          {
            categorias.length > 0
              ? (categorias.map((cat) => (
                <button
                  className="category"
                  key={ cat.id }
                  type="button"
                  data-testid="category"
                  onClick={ () => this.byCategory(cat.id) }
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
