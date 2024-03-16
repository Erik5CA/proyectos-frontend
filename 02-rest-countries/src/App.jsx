import { useState } from "react";
import "./App.css";
import BarSup from "./components/BarSup";
import Card from "./components/Card.jsx";
import Filter from "./components/Filter";
import Search from "./components/Search";
import paises from "./data.js";
import { useEffect } from "react";
import Modal from "./components/Modal.jsx";

function App() {
  // const paises12 = paises.slice(0, 12);
  const [countries, setCountries] = useState(paises);
  const [countriesCurrent, setCountriesCurrent] = useState(paises);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [countrySelect, setCountrySelect] = useState("");

  const filterRegion = (region) => {
    const filterCountries = paises.filter(
      (country) => country.region.toLowerCase() === region
    );
    return filterCountries;
  };

  const searchCountry = (search) => {
    const filterCountries = countriesCurrent?.filter((country) =>
      country.name.toLowerCase().startsWith(search)
    );
    // console.log(filterCountries);
    return filterCountries;
  };

  useEffect(() => {
    const newCountries = searchCountry(search);
    setCountries([...newCountries]);
  }, [search]);

  useEffect(() => {
    if (filter === "All") return;
    const newCountriesReg = filterRegion(filter);
    setCountriesCurrent([...newCountriesReg]);
    // const newCountries = searchCountry(search);
    setCountries([...newCountriesReg]);
  }, [filter]);

  const openModal = () => {
    setModal(true);
  };

  const handleSelecCountry = (idCountry) => {
    setCountrySelect(idCountry);
    console.log(idCountry);
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
            {countries?.map((pais) => (
              <Card
                key={pais.name}
                pais={pais}
                openModal={openModal}
                selection={handleSelecCountry}
              />
            ))}
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
