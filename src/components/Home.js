import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
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
      produtos: products,
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
      busca,
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
          { (produtos.length === 0 ? <h4>Nenhum resultado</h4> : <p>Tem algo</p>) }
        </section>
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
