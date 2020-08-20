import React from "react";
import "./App.css";

const BABIES = [
  {
    name: "Allie",
    src: require("./assets/allie.jpeg"),
  },
  {
    name: "Cherrie",
    src: require("./assets/cherrie.jpg"),
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
    name: "Mary Hettler",
    src: require("./assets/maryb.jpg"),
  },
  {
    name: "Mary Young",
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
  return (
    <div className="App">
      <div className="grid">
        {BABIES.map(({ name, src }) => (
          <figure>
            <img src={src} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default App;
