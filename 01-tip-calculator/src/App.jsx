import "./App.css";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";

function App() {
  return (
    <>
      <h1 className="title"> Splitter </h1>
      <div className="container">
        <div className="container-options">
          <div className="input-container">
            <h2 className="title-container">Bill</h2>
            <input type="text" className="input" placeholder="0" />
            <img className="img-input" src={iconDollar} alt="" />
          </div>
          <div>
            <h2 className="title-container">Select tip %</h2>
            <div className="grid-options">
              <button className="button-option">5%</button>
              <button className="button-option">10%</button>
              <button className="button-option">15%</button>
              <button className="button-option">25%</button>
              <button className="button-option">50%</button>
              <input type="text" className="input" placeholder="Custom" />
            </div>
          </div>
          <div className="input-container">
            <h2 className="title-container">Number of People</h2>
            <input type="text" className="input" placeholder="0" />
            <img className="img-input" src={iconPerson} alt="" />
          </div>
        </div>
        <div className="container-results">
          <div>
            <div className="results">
              <div>
                <h2 className="title-results">Tip Amount</h2>
                <p className="subtitle-results">/ person</p>
              </div>
              <h3 className="price">$4.24</h3>
            </div>
            <div className="results">
              <div>
                <h2 className="title-results">Total</h2>
                <p className="subtitle-results">/ person</p>
              </div>
              <h3 className="price">$4.24</h3>
            </div>
          </div>
          <button className="button-reset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
