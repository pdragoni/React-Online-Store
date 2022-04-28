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
    } = this.props;
    return (
      <div data-testid="product" className="produto">
        <Link
          to={ `/details/${id}` }
          title={ title }
          Component={ Details }
          data-testid="product-detail-link"
        >
          <h4>
            { title }
          </h4>
          <p>
            { price }
          </p>
          <img src={ thumbnail } alt={ title } className="imagem" />
        </Link>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Products;
