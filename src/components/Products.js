import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { Link } from 'react-router-dom';
import Details from '../pages/Details';

class Products extends React.Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      id,
      addCarrinho,
      object,
    } = this.props;
    return (
      <div data-testid="product" className="produto">
        <Link
          to={ `/details/${id}` }
          title={ title }
          Component={ Details }
          data-testid="product-detail-link"
        >
          <span data-testid="product-detail-name">
            { title }
          </span>
          <p>
            { price }
          </p>
          <img src={ thumbnail } alt={ title } className="imagem" />
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addCarrinho(object) }
        >
          Incluir Produto
        </button>
      </div>
    );
  }
}
Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addCarrinho: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
};

export default Products;
