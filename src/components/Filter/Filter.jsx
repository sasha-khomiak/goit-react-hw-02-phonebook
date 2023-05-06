import { Input } from './Filter.styled';

const Filter = ({ handleChangeFilter, value }) => {
  return (
    <>
      <Input onChange={handleChangeFilter} value={value} />
    </>
  );
};

export default Filter;
