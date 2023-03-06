import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class Form extends Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section>
        <form>
          <FormInput
            labelName="card-name"
            fieldName="Nome: "
            testId="name-input"
            inputType="text"
            inputEvent={ onInputChange }
            inputValue={ cardName }
            inputName="cardName"
          />
          <FormInput
            labelName="card-description"
            fieldName="Descrição: "
            testId="description-input"
            inputType="textarea"
            inputEvent={ onInputChange }
            inputValue={ cardDescription }
            inputName="cardDescription"
          />
          <FormInput
            labelName="card-attribute1"
            fieldName="Attr1: "
            testId="attr1-input"
            inputType="number"
            inputEvent={ onInputChange }
            inputValue={ cardAttr1 }
            inputName="cardAttr1"
          />
          <FormInput
            labelName="card-attribute2"
            fieldName="Attr2: "
            testId="attr2-input"
            inputType="number"
            inputEvent={ onInputChange }
            inputValue={ cardAttr2 }
            inputName="cardAttr2"
          />
          <FormInput
            labelName="card-attribute3"
            fieldName="Attr3: "
            testId="attr3-input"
            inputType="number"
            inputEvent={ onInputChange }
            inputValue={ cardAttr3 }
            inputName="cardAttr3"
          />
          <FormInput
            labelName="card-image"
            fieldName="Imagem: "
            testId="image-input"
            inputType="text"
            inputEvent={ onInputChange }
            inputValue={ cardImage }
            inputName="cardImage"
          />
          <label htmlFor="card-rarity">
            Raridade:
            <select
              data-testid="rare-input"
              id="card-rarity"
              onChange={ onInputChange }
              value={ cardRare }
              name="cardRare"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <FormInput
            labelName="is-trumph"
            fieldName="Super Trunfo: "
            testId="trunfo-input"
            inputType="checkbox"
            inputEvent={ onInputChange }
            inputValue={ cardTrunfo }
            inputName="cardTrunfo"
          />
          <input
            type="button"
            value="Salvar"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </form>
      </section>
    );
  }
}

Form.defaultProps = {
  hasTrunfo: false,
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
