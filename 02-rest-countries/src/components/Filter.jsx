import { useState } from "react";

export default function Filter() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container-filter-options">
      <div className="container-filter">
        <h3 className="filter-title">Filter by Region</h3>
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
      <div className={`container-options ${show ? "show" : ""} `}>
        <div className="option">
          <p>Africa</p>
        </div>
        <div className="option">
          <p>Ameria</p>
        </div>
        <div className="option">
          <p>Europe</p>
        </div>
        <div className="option">
          <p>Asia</p>
        </div>
        <div className="option">
          <p>Oceania</p>
        </div>
      </div>
    </div>
  );
}
