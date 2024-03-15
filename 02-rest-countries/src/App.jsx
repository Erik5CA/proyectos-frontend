import "./App.css";
import BarSup from "./components/BarSup";
import Card from "./components/Card.jsx";
import Filter from "./components/Filter";
import Search from "./components/Search";
import paises from "./data.js";

function App() {
  const paises12 = paises.slice(0, 12);
  console.log(paises12);

  return (
    <>
      <header>
        <BarSup />
        <section className="container-barra">
          <div className="container-search-filter">
            <Search />
            <Filter />
          </div>
        </section>
      </header>
      <main>
        <div className="container-barra">
          <div className="cards">
            {paises12?.map((pais) => (
              <Card key={pais.name} pais={pais} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
