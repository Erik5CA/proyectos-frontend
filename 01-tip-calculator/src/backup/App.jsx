import { useState } from "react";
import "./App.css";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
import { useEffect } from "react";


function App() {
  const buttons = document.querySelectorAll(".button-option");
  const inputs = document.querySelectorAll(".input");
  const btnReset = document.querySelector(".button-reset");
  // console.log(inputs);
  const initInputs = () => {
    inputs.forEach((input) => (input.value = ""));
  };

  const removeSelected = () => {
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });
  };
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [bill, setBill] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [error, setError] = useState(false);

  const handleBillChange = (e) => {
    setBill(Number(e.target.value));
    console.log(e.target.value);
  };

  const handleNumPeopleChange = (e) => {
    if (e.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
    setNumPeople(Number(e.target.value));
    console.log(e.target.value);
  };

  const handleTipPercentChange = (e) => {
    if (!numPeople) return;
    const str = e.target.innerHTML;
    removeSelected();
    e.target.classList.add("selected");
    setTipPercent(Number(str.slice(0, str.length - 1)));
    console.log(e.target.classList);
  };

  const handleCustomChange = (e) => {
    removeSelected();
    setTipPercent(Number(e.target.value));
    console.log(e.target.value);
  };

  const handleReset = () => {
    initInputs();
    removeSelected();
    setTipAmount("0.00");
    setTotal("0.00");
    setBill(0);
    setNumPeople(0);
    setTipPercent(0);
    setError(false);
    btnReset?.classList.add("no-reset");
  };

  useEffect(() => {
    if (!numPeople || numPeople === 0) return;
    const tip = ((tipPercent / 100) * bill) / numPeople;
    const totalPerson = bill / numPeople + tip;
    setTipAmount(tip.toFixed(2));
    setTotal(totalPerson.toFixed(2));
    btnReset?.classList.remove("no-reset");
  }, [tipPercent, numPeople, bill]);

  return (
    <>
      <h1 className="title"> Splitter </h1>
      <div className="container">
        <div className="container-options">
          <div className="input-container">
            <h2 className="title-container">Bill</h2>
            <input
              type="text"
              className="input"
              placeholder="0"
              onChange={handleBillChange}
            />
            <img className="img-input" src={iconDollar} alt="" />
          </div>
          <div>
            <h2 className="title-container">Select tip %</h2>
            <div className="grid-options">
              <button
                className="button-option"
                onClick={handleTipPercentChange}
              >
                5%
              </button>
              <button
                className="button-option"
                onClick={handleTipPercentChange}
              >
                10%
              </button>
              <button
                className="button-option"
                onClick={handleTipPercentChange}
              >
                15%
              </button>
              <button
                className="button-option"
                onClick={handleTipPercentChange}
              >
                25%
              </button>
              <button
                className="button-option"
                onClick={handleTipPercentChange}
              >
                50%
              </button>
              <input
                type="text"
                className="input"
                placeholder="Custom"
                onChange={handleCustomChange}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="container-paragraph">
              <h2 className="title-container">Number of People</h2>
              <h2 className={`title-container ${error ? "error" : "hidden"}`}>
                {" "}
                Can´t be zero
              </h2>
            </div>
            <input
              type="text"
              className="input"
              placeholder="0"
              onChange={handleNumPeopleChange}
            />
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
              <h3 className="price">{`$${tipAmount}`}</h3>
            </div>
            <div className="results">
              <div>
                <h2 className="title-results">Total</h2>
                <p className="subtitle-results">/ person</p>
              </div>
              <h3 className="price">{`$${total}`}</h3>
            </div>
          </div>
          <button className="button-reset no-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
