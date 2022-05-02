import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { getProductsDetails } from '../services/api';

export default function Details({ addCarrinho }) {
  const [productDetails, setProductDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    getProductsDetails(params.id)
      .then((result) => setProductDetails(result))
      .catch((error) => console.log(error));
  }, [params.id]);
  return (
    <div>
      <header>
        <Link
          className="carrinho"
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <button type="button">Ir para Carrinho</button>
        </Link>
      </header>
      <h6 data-testid="product-detail-name">{ productDetails.title }</h6>
      <img alt="thumbnail" src={ productDetails.thumbnail } />
      <h4>{ productDetails.price }</h4>
      <h4>{ productDetails.id }</h4>

      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => addCarrinho(productDetails) }
      >
        Incluir Produto
      </button>
    </div>
  );
}

Details.propTypes = {
  addCarrinho: PropTypes.func.isRequired,
};
