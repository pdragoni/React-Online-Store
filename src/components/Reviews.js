import React from 'react';
import CardReview from './cardReview';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      coment: '',
      rating1: false,
      rating2: false,
      rating3: false,
      rating4: false,
      rating5: false,
      cardReviews: [],
    };
  }

  // componentDidMount = () => {
  //   const { cardReviews } = this.state;
  //   const reviews = cardReviews.push(JSON.parse(localStorage.getItem('cardReviews')));
  //   this.setState = ({
  //     cardReviews: reviews,
  //   });
  // }

  handleEmail = ({ target }) => {
    this.setState({
      email: target.value,
    });
  }

handleInput = ({ target }) => {
  this.setState({
    coment: target.value,
  });
}

handleCheckBox = ({ target }) => {
  if (target.id === 'rating1') {
    this.setState({
      rating1: true,
      rating2: false,
      rating3: false,
      rating4: false,
      rating5: false,
    });
  }
  if (target.id === 'rating2') {
    this.setState({
      rating1: true,
      rating2: true,
      rating3: false,
      rating4: false,
      rating5: false,
    });
  }
  if (target.id === 'rating3') {
    this.setState({
      rating1: true,
      rating2: true,
      rating3: true,
      rating4: false,
      rating5: false,
    });
  }
  if (target.id === 'rating4') {
    this.setState({
      rating1: true,
      rating2: true,
      rating3: true,
      rating4: true,
      rating5: false,
    });
  }
  if (target.id === 'rating5') {
    this.setState({
      rating1: true,
      rating2: true,
      rating3: true,
      rating4: true,
      rating5: true,
    });
  }
}

handleButton = async () => {
  const {
    email,
    coment,
    rating1,
    rating2,
    rating3,
    rating4,
    rating5,
    cardReviews,
  } = this.state;
  const newReview = {
    email,
    coment,
    rating1,
    rating2,
    rating3,
    rating4,
    rating5,
  };
  cardReviews.push(newReview);
  // console.log(newReview);
  this.setState({
    email: '',
    coment: '',
    rating1: false,
    rating2: false,
    rating3: false,
    rating4: false,
    rating5: false,
  });
  console.log(cardReviews);
  localStorage.setItem('cardReviews', JSON.stringify(cardReviews));
}

render() {
  const
    {
      email,
      coment,
      rating1,
      rating2,
      rating3,
      rating4,
      rating5,
      cardReviews,
    } = this.state;
  return (
    <div>
      <h3>Avaliação:</h3>
      <form>
        <label htmlFor="email">
          <input
            placeholder="Email"
            id="email"
            data-testid="product-detail-email"
            type="email"
            value={ email }
            required
            onChange={ this.handleEmail }
          />
        </label>
        <br />
        <br />
        <label htmlFor="rating1">
          <input
            data-testid="1-rating"
            id="rating1"
            type="radio"
            onChange={ this.handleCheckBox }
            checked={ rating1 }
          />
        </label>
        <label htmlFor="rating2">
          <input
            data-testid="2-rating"
            id="rating2"
            type="radio"
            onChange={ this.handleCheckBox }
            checked={ rating2 }
          />
        </label>
        <label htmlFor="rating3">
          <input
            data-testid="3-rating"
            id="rating3"
            type="radio"
            onChange={ this.handleCheckBox }
            checked={ rating3 }
          />
        </label>
        <label htmlFor="rating4">
          <input
            data-testid="4-rating"
            id="rating4"
            type="radio"
            onChange={ this.handleCheckBox }
            checked={ rating4 }
          />
        </label>
        <label htmlFor="rating5">
          <input
            data-testid="5-rating"
            id="rating5"
            type="radio"
            onChange={ this.handleCheckBox }
            checked={ rating5 }
          />
        </label>
        <h3>Deixe seu comentário:</h3>
        <textarea
          data-testid="product-detail-evaluation"
          id="coment"
          placeholder="(Opcional)"
          maxLength="500"
          cols="50"
          rows="10"
          value={ coment }
          onChange={ this.handleInput }
        />
        <br />
        <br />
        <button
          data-testid="submit-review-btn"
          type="button"
          onClick={ this.handleButton }
        >
          Enviar
        </button>
      </form>
      {
        cardReviews.map((review, index) => (
          <CardReview
            key={ index }
            email={ review.email }
            coment={ review.coment }
            rating1={ review.rating1 }
            rating2={ review.rating2 }
            rating3={ review.rating3 }
            rating4={ review.rating4 }
            rating5={ review.rating5 }
          />
        ))
      }
    </div>
  );
}
}
export default Reviews;
