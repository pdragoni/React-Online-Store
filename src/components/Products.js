import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Products extends React.Component {
  render() {
    const {
      title,
      price,
      thumbnail,
    } = this.props;
    return (
      <div data-testid="product" className="produto">
        <h4>
          { title }
        </h4>
        <p>
          { price }
        </p>
        <img src={ thumbnail } alt={ title } className="imagem" />
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Products;
