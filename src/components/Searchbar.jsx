import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

export default function Searchbar({id}) {
  const [results, setResults] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Fetch all Items from the API when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setAllItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  // Filter Items based on the query
  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
    } else {
      const filteredItems = allItems
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 10);
      setResults(filteredItems);
    }
  }, [searchTerm, allItems]);

  return (
    <>
      <div className="flex h-full py-2 border-[1px] rounded-full border-slate-700 bg-black text-gray">
        <button
          type="button"
          className="text-2xl hover:text-gray-500 px-2"
          alt="Search"
          title="Search"
        >
          <FiSearch />
        </button>
        <input
          id={id}
          value={searchTerm}
          onChange={handleInputChange}
          autoFocus
          className="flex-grow outline-none w-full bg-transparent"
          placeholder="Search"
        />
        <div className="text-end translate-x-[-10px] flex items-center">
          <button
            onClick={clearSearch}
            className={`hover:text-gray-500 ml-4 mr-1 ${
              searchTerm ? "visible" : "hidden"
            }`}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="absolute rounded-lg border border-gray-900 bg-gray-600 ">
        {results.map((item) => (
          <div key={item.id} className="flex p-2 mt-1 cursor-pointer">
            <FiSearch />&nbsp;{item.name}
          </div>
        ))}
      </div>
    </>
  );
}
