function SearchBar ({ onSearch }) {
  return (
    <div className="relative w-full max-w-md mx-auto my-8">
      <input
        type="text"
        maxLength={50}
        placeholder="Search any product"
        className="text-black w-full p-4 rounded-full bg-white/10 border mt-10 focus:outline-none border-green-500 transition-colors"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;