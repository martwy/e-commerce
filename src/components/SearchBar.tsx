import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Game as GameType } from "../utils/Game";

function SearchBar() {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<GameType[]>([]);
  const { games } = useShoppingCart();
  const searchSimilar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    const results = games.filter((game) => {
      return (
        event.target.value &&
        game.name &&
        game.name.toLowerCase().includes(event.target.value)
      );
    });
    setResults(results);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mx-6">
        <MagnifyingGlassIcon className="w-7 ml-2" />
        <input
          className="text-black rounded-md h-12 w-80 ml-4 mt-2 p-2 text-sm"
          type="search"
          id="search"
          placeholder="Search game..."
          value={input}
          onChange={searchSimilar}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></input>
      </div>
      <div
        className={`${
          isFocused
            ? "flex flex-col bg-slate-600 w-80 rounded-md ml-20 p-1 mt-14 absolute max-h-80 overflow-y-scroll"
            : null
        }`}
      >
        {results.map((result) => (
          <div className="flex">{result.name}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
