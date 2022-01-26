import React from "react";

export default function Search({ value, onChange, onSubmit }) {
  return (
    <div className="border border-gray mb-4 p-2 w-[100%]">
      <h3 className="font-bold text-[1.6rem] mb-4">Search for posts</h3>
      <form className="w-[100%] relative">
        <input
          type="search"
          name="query"
          value={value}
          onChange={onChange}
          placeholder="Search for posts..."
          className="border-2 border-sky-500 w-[100%] py-3 px-4 rounded-full"
          id="search"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="absolute right-12 top-3 text-2xl"
        >
          <i className="fas fa-search fa-lg"></i>
        </button>
      </form>
    </div>
  );
}
