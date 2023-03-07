import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      onInputChange,
      nameFilter,
    } = this.props;

    return (
      <fieldset>
        Filtros de busca
        <input
          type="text"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ onInputChange }
          name="nameFilter"
          placeholder="Digite uma carta"
        />
      </fieldset>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.string,
}.isRequired;

export default Filter;
