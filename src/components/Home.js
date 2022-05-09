import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

    const { addCarrinho, idFilter } = this.props;

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
          produtos.map((element) => (
            <Products
              key={ element.id }
              id={ element.id }
              title={ element.title }
              price={ element.price }
              thumbnail={ element.thumbnail }
              addCarrinho={ addCarrinho }
              object={ element }
              idFilter={ idFilter }
              onClick={ () => this.details(element.id) }
            />
          ))
        ) : <h5>Nenhum produto foi encontrado</h5>}
        <br />
        <br />
        <section className="categorias">
          {
            categorias?.length > 0
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

Home.propTypes = {
  addCarrinho: PropTypes.func.isRequired,
  idFilter: PropTypes.func.isRequired,
};

export default Home;
