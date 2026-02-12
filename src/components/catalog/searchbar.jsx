function SearchBar ({ onSearch }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        maxLength={50}
        placeholder="Search any product"
        className="text-black w-full p-4 rounded-full bg-white/10 border mt-10 focus:outline-none focus:ring-1 focus:ring-green-500 border-green-500 transition-colors"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;