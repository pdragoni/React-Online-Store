import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getProductsDetails } from '../services/api';

export default function Cart({ incluirCarrinho, idProducts, addCarrinho }) {
  const cart = incluirCarrinho;
  console.log(cart);

  const [somatorio, setSomatorio] = useState([]);
  const params = useParams();
  useEffect(() => {
    getProductsDetails(params.id)
      .then((result) => setSomatorio(result))
      .catch((error) => console.log(error));
  }, [params.id]);

  /*
  this.state= {
    contador: '',     ===============>>>>>>>>>>>>>>>      { `Quantidade: ${idProducts[item.id]}` }
  };
  changeResult = (operacao) => {
    const { contador } = this.state;
    if (operacao === 'soma') {
      this.setState({
        contador: contador + 1,
      });
    }
    if (operacao === 'subtracao') {
      thiis.setState({
        contador: contador - 1,
      });
    }
*/

  return (
    <div>
      <header>
        <h2>{ `Carrinho:${cart.length}` }</h2>
      </header>
      { cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={ index }>
            <img alt="imagem do produto" src={ item.thumbnail } />
            <h2 data-testid="shopping-cart-product-name">{item.title}</h2>
            <button
              type="button"
              onClick={ () => console.log('subtracao') }
              data-testid="product-decrease-quantity"
            >
              -
              {' '}

            </button>
            <p
              data-testid="shopping-cart-product-quantity"
              defaultValue="1"
            >
              { `Quantidade: ${idProducts[item.id]}` }
            </p>
            <button
              type="button"
              onClick={ () => addCarrinho(somatorio) }
              data-testid="product-increase-quantity"
            >
              +
              {' '}

            </button>
            <h3>
              Preço: R$
              {' '}
              {item.price}
            </h3>
            <button
              type="button"
              onClick={ () => console.log('excluir') }
            >
              Remover X
            </button>
          </div>
        )))
        : <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1> }
      <footer>
        <h2>Valor Total:</h2>
        <button
          type="button"
          onClick={ () => console.log('finalizar') }
        >
          Finalizar Compra
        </button>
      </footer>
    </div>
  );
}

Cart.propTypes = {
  incluirCarrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
  idProducts: PropTypes.shape({
    id: PropTypes.oneOfType(PropTypes.array, PropTypes.number).isRequired,
  }).isRequired,
  addCarrinho: PropTypes.func.isRequired,
};
