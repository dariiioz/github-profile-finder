import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SearchInput = ({ onSearchChange }) => {
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchChange(search);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        className="bg-gray-800 text-white text-center w-1/2 mx-auto mt-4 p-2 rounded-md"
                        placeholder="Type github username here"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4">
                        Find github profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;
