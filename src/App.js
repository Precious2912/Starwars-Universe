import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: "",
    };
  }

  onSearchField = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  componentDidMount() {
    fetch("https://akabab.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              characters: users,
            };
          }
        )
      );
  }

  render() {
    const { characters, searchField } = this.state;
    const { onSearchField } = this;

    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search character"
          onChange={onSearchField}
        />
        {filteredCharacters.map((character) => {
          return (
            <div key={character.id}>
              <h1>{character.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
