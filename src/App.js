import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    deck: [],
    nameFilter: '',
  };

  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    const valueToUpdate = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueToUpdate,
    });
  };

  handleClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deck,
    } = this.state;

    const cardInfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    const updatedDeck = [...deck, cardInfo];

    this.setState({
      deck: updatedDeck,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  handleClickDelete = (element) => {
    const { deck } = this.state;
    const currentDeck = [...deck];
    const cardToRemove = currentDeck.filter((card) => card.cardName !== element);

    this.setState({ deck: cardToRemove });
  };

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
      deck,
      nameFilter,
    } = this.state;

    const sumAttribute = 210;
    const maxAttribute = 90;
    const isFormValid = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sumAttribute
      && Number(cardAttr1) <= maxAttribute
      && Number(cardAttr2) <= maxAttribute
      && Number(cardAttr3) <= maxAttribute
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0;

    const validateTrunfo = deck.some((card) => card.cardTrunfo === true);

    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
            onInputChange={ this.handleChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ !isFormValid }
            onSaveButtonClick={ this.handleClick }
            hasTrunfo={ validateTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <Filter nameFilter={ nameFilter } onInputChange={ this.handleChange } />
        <div className="card-list">
          {deck
            .filter((card) => card.cardName.includes(nameFilter))
            .map((card) => (
              <div key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <input
                  type="button"
                  value="Excluir"
                  data-testid="delete-button"
                  onClick={ () => this.handleClickDelete(card.cardName) }
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
