import React, { Component } from 'react';
import FormInput from './FormInput';

class Form extends Component {
  render() {
    return (
      <section>
        <form>
          <FormInput
            labelName="card-name"
            fieldName="Nome: "
            testId="name-input"
            inputType="text"
          />
          <FormInput
            labelName="card-description"
            fieldName="Descrição: "
            testId="description-input"
            inputType="textarea"
          />
          <FormInput
            labelName="card-attribute1"
            fieldName="Attr1: "
            testId="attr1-input"
            inputType="number"
          />
          <FormInput
            labelName="card-attribute2"
            fieldName="Attr2: "
            testId="attr2-input"
            inputType="number"
          />
          <FormInput
            labelName="card-attribute3"
            fieldName="Attr3: "
            testId="attr3-input"
            inputType="number"
          />
          <FormInput
            labelName="card-image"
            fieldName="Imagem: "
            testId="image-input"
            inputType="text"
          />
          <label htmlFor="card-rarity">
            Raridade:
            <select
              data-testid="rare-input"
              id="card-rarity"
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
          />
          <input type="button" value="Salvar" data-testid="save-button" />
        </form>
      </section>
    );
  }
}

export default Form;
