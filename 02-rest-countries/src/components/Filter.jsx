import { useState } from "react";
import { Option } from "./Option.jsx";

const options = [
  {
    id: "africa",
    name: "Africa",
  },
  {
    id: "americas",
    name: "America",
  },
  {
    id: "asia",
    name: "Asia",
  },
  {
    id: "europe",
    name: "Europe",
  },
  {
    id: "oceania",
    name: "Oceania",
  },
];

export default function Filter({ setFilter }) {
  const [show, setShow] = useState(false);
  const [filterName, setFilterName] = useState("Filter by Region");

  const handleShow = () => {
    setShow(!show);
  };

  const handleFilterChange = (Option) => {
    setFilterName(Option);
    setShow(false);
  };

  return (
    <div className="container-filter-options">
      <div className="container-filter">
        <h3 className="filter-title">{filterName}</h3>
        <svg
          onClick={handleShow}
          width={"15px"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {show && (
        <div className="container-options">
          {options?.map((option) => (
            <Option
              key={option.id}
              name={option.name}
              selected={handleFilterChange}
              id={option.id}
              setFilter={setFilter}
            />
          ))}
        </div>
      )}
    </div>
  );
}
