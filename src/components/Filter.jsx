import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      onInputChange,
      nameFilter,
      rareFilter,
      trunfoFilter,
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
          disabled={ trunfoFilter }
        />
        <select
          data-testid="rare-filter"
          value={ rareFilter }
          onChange={ onInputChange }
          name="rareFilter"
          disabled={ trunfoFilter }
        >
          <option defaultValue="todas">todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            id="trunfo-filter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </fieldset>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.string,
  rareFilter: PropTypes.string,
  nameFilter: PropTypes.string,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default Filter;
