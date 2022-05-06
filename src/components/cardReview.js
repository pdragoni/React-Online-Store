import React from 'react';
import PropTypes from 'prop-types';

class CardReview extends React.Component {
  render() {
    const {
      email,
      coment,
      rating1,
      rating2,
      rating3,
      rating4,
      rating5,
    } = this.props;

    return (
      <div>
        <h4>{ email }</h4>
        <p>{ coment }</p>
        <input type="radio" rating1={ rating1 } />
        <input type="radio" rating2={ rating2 } />
        <input type="radio" rating3={ rating3 } />
        <input type="radio" rating4={ rating4 } />
        <input type="radio" rating5={ rating5 } />
      </div>
    );
  }
}

CardReview.propTypes = {
  email: PropTypes.string.isRequired,
  coment: PropTypes.string.isRequired,
  rating1: PropTypes.bool.isRequired,
  rating2: PropTypes.bool.isRequired,
  rating3: PropTypes.bool.isRequired,
  rating4: PropTypes.bool.isRequired,
  rating5: PropTypes.bool.isRequired,
};

export default CardReview;
