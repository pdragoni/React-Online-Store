import React from 'react';
import PropTypes from 'prop-types';

export default function Cart(
  { incluirCarrinho, idProducts, updateCartAdd, updateCartSub },
) {
  const cart = incluirCarrinho;
  console.log(cart);

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
              onClick={ () => updateCartSub(idProducts, item.id) }
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
              onClick={ () => updateCartAdd(idProducts, item.id) }
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
  updateCartAdd: PropTypes.func.isRequired,
  updateCartSub: PropTypes.func.isRequired,
};
