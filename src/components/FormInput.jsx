import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { labelName,
      inputType,
      testId,
      fieldName,
      inputValue,
      inputEvent,
      inputName,
    } = this.props;

    return (
      <label htmlFor={ labelName }>
        {fieldName}
        {inputType === 'textarea' ? (
          <textarea
            data-testid={ testId }
            id={ labelName }
            value={ inputValue }
            onChange={ inputEvent }
            name={ inputName }
          />
        ) : (
          <input
            type={ inputType }
            data-testid={ testId }
            id={ labelName }
            value={ inputValue }
            checked={ inputType === 'checkbox' ? inputValue : null }
            onChange={ inputEvent }
            name={ inputName }
          />
        )}
      </label>
    );
  }
}

FormInput.propTypes = {
  labelName: PropTypes.string,
  inputType: PropTypes.string,
  testId: PropTypes.string,
  fieldName: PropTypes.string,
  inputName: PropTypes.string,
}.isRequired;

export default FormInput;
