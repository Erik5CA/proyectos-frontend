import { useState } from "react";
import { useEffect } from "react";
import BarSup from "./components/BarSup";
import Card from "./components/Card.jsx";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Modal from "./components/Modal.jsx";
import paises from "./data.js";
import "./App.css";

function App() {
  // const paises12 = paises.slice(0, 12);
  const [countries, setCountries] = useState(paises);
  const [countriesCurrent, setCountriesCurrent] = useState(paises);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [countrySelect, setCountrySelect] = useState("");

  const filterRegion = (region) => {
    if (filter === "all") {
      return paises;
    }
    const filterCountries = paises.filter(
      (country) => country.region.toLowerCase() === region
    );
    return filterCountries;
  };

  const searchCountry = (search) => {
    const filterCountries = countriesCurrent?.filter((country) =>
      country.name.toLowerCase().startsWith(search)
    );
    return filterCountries;
  };

  useEffect(() => {
    const newCountries = searchCountry(search);
    setCountries([...newCountries]);
  }, [search]);

  useEffect(() => {
    const newCountriesReg = filterRegion(filter);
    setCountriesCurrent([...newCountriesReg]);
    setCountries([...newCountriesReg]);
  }, [filter]);

  const openModal = () => {
    setModal(true);
  };

  const handleSelecCountry = (idCountry) => {
    setCountrySelect(idCountry);
  };

  return (
    <>
      <header>
        <BarSup />
        <section className="container-barra">
          <div className="container-search-filter">
            <Search setSearch={setSearch} />
            <Filter setFilter={setFilter} />
          </div>
        </section>
      </header>
      <main>
        <div className="container-barra">
          <div className="cards">
            {countries.length !== 0 ? (
              countries?.map((pais) => (
                <Card
                  key={pais.name}
                  pais={pais}
                  openModal={openModal}
                  selection={handleSelecCountry}
                />
              ))
            ) : (
              <h2>No results were found for this search</h2>
            )}
          </div>
        </div>
        {modal && (
          <Modal
            onClose={setModal}
            country={countries.find(
              (country) => country.name === countrySelect
            )}
          />
        )}
      </main>
    </>
  );
}

export default App;
