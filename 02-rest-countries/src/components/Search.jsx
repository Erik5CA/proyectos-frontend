export default function Search({ setSearch }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" container-search">
      <svg
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        onChange={handleSearchChange}
        type="search"
        className="input-search"
        placeholder="Search for a country.."
      />
    </div>
  );
}
