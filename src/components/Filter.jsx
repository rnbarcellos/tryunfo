import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      onInputChange,
      nameFilter,
      rareFilter,
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
        <select
          data-testid="rare-filter"
          value={ rareFilter }
          onChange={ onInputChange }
          name="rareFilter"
        >
          <option defaultValue="todas">todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </fieldset>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.string,
  rareFilter: PropTypes.string,
  nameFilter: PropTypes.string,
}.isRequired;

export default Filter;
