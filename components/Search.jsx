const Search = ({ query = '', onChange }) => {
  return (
    <div className="w-full p-2">
      <h3 className="mb-4 text-[1.6rem] font-bold">Search for posts</h3>
      <div className="relative">
        <input
          type="text"
          name="query"
          value={query}
          onChange={onChange}
          placeholder="Search for posts..."
          className="form-input relative w-full rounded-full border-2 border-sky-500 py-2 px-4 text-gray-800 focus:border-pink-400"
        />
        <i className="fas fa-search fa-md absolute right-3 top-3 text-gray-800"></i>
      </div>
    </div>
  )
}

export default Search
