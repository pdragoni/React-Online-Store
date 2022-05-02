import React from 'react';
import PropTypes from 'prop-types';

export default function Cart({ incluirCarrinho }) {
  const cart = incluirCarrinho;
  return (
    <div>
      { cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={ index }>
            <img alt="imagem do produto" src={ item.thumbnail } />
            <h3>
              Preço
              {' '}
              {item.price}
            </h3>
            <h2 data-testid="shopping-cart-product-name">{item.title}</h2>
            Quantitade:
            {' '}
            <p data-testid="shopping-cart-product-quantity" defaultValue="1">1</p>
          </div>
        )))
        : <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1> }
    </div>
  );
}

Cart.propTypes = {
  incluirCarrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
};
