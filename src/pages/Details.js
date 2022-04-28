import React from 'react';
import PropTypes from 'prop-types';
// import { getProductsDetails } from '../services/api';

class Details extends React.Component {
  // async componentDidMount() {
  //   const detalhes = await getProductsDetails();
  //   console.log(detalhes);
  // }

  render() {
    const {
      title,
    } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Details;
