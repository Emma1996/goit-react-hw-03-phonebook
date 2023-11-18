import PropTypes from 'prop-types';
export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      Search:
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
