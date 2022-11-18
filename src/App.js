import { Component } from "react";

import Cardlist from "./components/card-list/cardlist.component";
import Searchbar from "./components/search-bar/searchbar.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: "",
    };
  }

  onSearchChange = (e) => {
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
    const { onSearchChange } = this;

    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="heading">Starwars Api</h1>
        <Searchbar onChangeHandler={onSearchChange} placeholder='Search character' className='character-search-bar'/>
        <Cardlist characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
