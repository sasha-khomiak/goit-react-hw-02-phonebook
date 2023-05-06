import { Input } from './Filter.styled';

import PropTypes from 'prop-types';

const Filter = ({ handleChangeFilter, value }) => {
  return (
    <>
      <Input onChange={handleChangeFilter} value={value} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
