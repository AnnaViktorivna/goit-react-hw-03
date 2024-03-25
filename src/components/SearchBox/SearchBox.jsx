const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p>Search:</p>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
