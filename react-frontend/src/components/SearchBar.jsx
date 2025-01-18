import { useState, useEffect } from "react";
import api from "../api";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const [result, setResult] = useState(null);

  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await api.get('/api/search/', { params: { q: searchVal }});

        setSuggestions(data.results);
        console.log(data.results);
      } catch (e) {
        alert(e);
      }
    };

    res();
  }, [searchVal]);

  const findResult = (company_name) => {
    setResult(suggestions.find((suggestion) => suggestion.company_name === company_name))
  }

  return (
    <div className="flex-1 justify-center w-1/2">
      <input
        type="text"
        placeholder="Search for Companies..."
        className="border border-gray-200 h-8 outline-none box-border px-[10px] py-[1px] transition duration-200 ease-in-out w-full"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
        onFocus={() => setHideSuggestions(false)}
        onBlur={async () => {
          setTimeout(() => {
            setHideSuggestions(true);
          }, 200);
        }}
      ></input>

      <ul
      className={`flex-1 justify-center menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow ${
        hideSuggestions ? "invisible" : "visible"}`}
      >
        {suggestions.map((suggestion) => (
          <li
            className="cursor-pointer box-border px-[10px] py-[1px] h-8 flex items-center hover:bg-slate-700"
            key={suggestion.cik}

            // useNavigate to specific company page
            onClick={() => findResult(suggestion.company_name)}
          >
            {suggestion["ticker"]} - {suggestion["company_name"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
