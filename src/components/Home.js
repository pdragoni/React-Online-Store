import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../index.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
      produtos: [],
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

  render() {
    const { categorias, produtos } = this.state;
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
            className="pesquisa"
          />
          <button type="button">Botão</button>
        </label>
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
