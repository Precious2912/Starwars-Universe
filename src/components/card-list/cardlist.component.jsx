import { Component } from "react";
import Card from "../card/card.component";
import "./cardlist.style.css";


export class Cardlist extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div className="card-list">
        {characters.map((character) => {
          return (
            <Card key={character.id} character={character}/>
          );
        })}
      </div>
    );
  }
}

export default Cardlist;
