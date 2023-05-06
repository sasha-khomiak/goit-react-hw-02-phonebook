const Filter = ({ handleChangeFilter, value }) => {
  return (
    <>
      <input onChange={handleChangeFilter} value={value} />
    </>
  );
};

export default Filter;
