import { useState, useEffect } from "react";
import api from "../api";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const [suggestions, setSuggestions] = useState("");

  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await api.get("/api/search/?q=${searchVal}");

        setSuggestions(data.results);
      } catch (e) {
        alert(e);
      }
    };

    res();
  }, [searchVal]);

  return (
    <>
      <input
        type="text"
        placeholder="Search for Companies..."
         className="border border-gray-300 h-8 box-border p-[1px] px-2 outline-none transition duration-200 ease-in-out focus:border-blue-500"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      ></input>
    </>
  );
};

export default SearchBar;
