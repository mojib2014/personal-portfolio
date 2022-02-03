import React from "react";

export default function Search({ value, onChange }) {
  return (
    <div className="p-2 w-full">
      <h3 className="font-bold text-[1.6rem] mb-4">Search for posts</h3>
      <div className="relative">
        <input
          type="text"
          name="query"
          value={value}
          onChange={onChange}
          placeholder="Search for posts..."
          className="form-input border-2 border-sky-500 focus:border-pink-400 text-gray-800 w-full py-2 px-4 rounded-full relative"
        />
        <i className="fas fa-search fa-md text-gray-800 absolute right-3 top-3"></i>
      </div>
    </div>
  );
}
