import React, { useState, useRef, useEffect } from "react";
import "./App.scss";

const BABIES = [
  {
    name: "Cherrie",
    src: require("./assets/cherrie.jpg"),
  },
  {
    name: "Allie",
    src: require("./assets/allie.jpeg"),
  },
  {
    name: "Cheryl",
    src: require("./assets/cheryl.jpg"),
  },
  {
    name: "Chris",
    src: require("./assets/chris.jpg"),
  },
  {
    name: "Dan",
    src: require("./assets/dan.jpg"),
  },
  {
    name: "Dave",
    src: require("./assets/dave.jpeg"),
  },
  {
    name: "Elizabeth",
    src: require("./assets/elizabeth.jpeg"),
  },
  {
    name: "Ivy",
    src: require("./assets/ivy.jpg"),
  },
  {
    name: "Jim",
    src: require("./assets/jim.jpg"),
  },
  {
    name: "Lauren",
    src: require("./assets/lauren.jpeg"),
  },
  {
    name: "Leon",
    src: require("./assets/leon.jpeg"),
  },
  {
    name: "Lynnie",
    src: require("./assets/lynnie.jpg"),
  },
  {
    name: "Mary B",
    src: require("./assets/maryb.jpg"),
  },
  {
    name: "Mary H",
    src: require("./assets/maryh.jpeg"),
  },
  {
    name: "Mike",
    src: require("./assets/mike.jpg"),
  },
  {
    name: "Paul",
    src: require("./assets/paul.jpg"),
  },
  {
    name: "Rebecca",
    src: require("./assets/rebecca.jpg"),
  },
  {
    name: "Tim",
    src: require("./assets/tim.jpg"),
  },
];

function App() {
  const formEl = useRef(null);
  const [allNames] = useState(BABIES.map(({ name }) => name).sort());
  const [availableNames, setAvailableNames] = useState(allNames);
  const [selectedNames, setSetSelectedNames] = useState([]);

  const onChange = (e) => {
    setSetSelectedNames(
      Array.prototype.map.call(formEl.current.foo, (select) => select.value)
    );
  };

  useEffect(() => {
    setAvailableNames(allNames.filter((name) => !selectedNames.includes(name)));
  }, [allNames, selectedNames]);

  return (
    <form ref={formEl} className="App" onChange={onChange}>
      <header>
        <h1>
          <span role="img" aria-label="">
            👶❓
          </span>
          Guess That Baby
          <span role="img" aria-label="">
            👶❓
          </span>
        </h1>
        <div>
          Available babies:{" "}
          {availableNames.map((name) => (
            <span className="available-name">{name}</span>
          ))}
        </div>
      </header>
      <div className="grid">
        {BABIES.map(({ name, src }, index) => (
          <figure key={name}>
            <img src={src} alt="" />
            <figcaption>
              <div className="count">{index + 1}</div>
              <select
                className="select"
                name="foo"
                value={selectedNames[index]}
              >
                <option value={""}>---</option>
                {allNames.map((name) => (
                  <option
                    key={name}
                    value={name}
                    disabled={selectedNames.includes(name)}
                  >
                    {name}
                  </option>
                ))}
              </select>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="guesses">
        <h3>Your Guesses:</h3>
        <ol>
          {selectedNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </div>
    </form>
  );
}

export default App;
