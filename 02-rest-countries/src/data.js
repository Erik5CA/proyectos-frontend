import paises from "./data.json";

// console.log(paises);

const getBorders = (borders) => {
  const newBorders = borders?.map((borde) => {
    const newBorde = paises.find((pais) => {
      if (pais.alpha3Code === borde) {
        return pais;
      }
    });
    return newBorde.name;
  });
  return newBorders;
};

const newPaises = paises.map((pais) => ({
  name: pais.name,
  nativeName: pais.nativeName,
  population: pais.population.toLocaleString("es-MX"),
  region: pais.region,
  subregion: pais.subregion,
  capital: pais?.capital,
  topLevelDomain: pais.topLevelDomain[0],
  currencies: pais?.currencies?.map((curr) => curr.name),
  languages: pais.languages?.map((lan) => lan.name),
  borders: getBorders(pais?.borders),
  flag: pais.flags.png,
}));

export default newPaises;
