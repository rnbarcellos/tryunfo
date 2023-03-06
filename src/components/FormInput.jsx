import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { labelName, inputType, testId, fieldName } = this.props;

    return (
      <label htmlFor={ labelName }>
        {fieldName}
        {inputType === 'textarea'
          ? <textarea data-testid={ testId } id={ labelName } />
          : <input type={ inputType } data-testid={ testId } id={ labelName } />}
      </label>
    );
  }
}

FormInput.propTypes = {
  labelName: PropTypes.string,
  inputType: PropTypes.string,
  testId: PropTypes.string,
  fieldName: PropTypes.string,
}.isRequired;

export default FormInput;
