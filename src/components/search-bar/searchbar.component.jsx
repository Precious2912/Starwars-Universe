import { Component } from "react";
import './searchbar.style.css'

class Searchbar extends Component {
    render() {
        return (
          <input
            type="search"
            className={`search-bar ${this.props.className}`}
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
          />
        );
    }
}

export default Searchbar