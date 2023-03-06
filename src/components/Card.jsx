import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="card-preview">
        <h2 data-testid="name-card">{`Nome: ${cardName}`}</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{`Descrição: ${cardDescription}`}</p>
        <h3 data-testid="attr1-card">{`Atributo 1: ${cardAttr1}`}</h3>
        <h3 data-testid="attr2-card">{`Atributo 2: ${cardAttr2}`}</h3>
        <h3 data-testid="attr3-card">{`Atributo 3: ${cardAttr3}`}</h3>
        <span data-testid="rare-card">{`Raridade: ${cardRare}`}</span>
        { cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2>}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
