import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
         <ul className="vertical medium-horizontal menu">
          <li className="fi-list">Test Your Memory</li>
          <li className="itemCenter fi-list"><strong>Dog Clicky Game</strong></li>
          <li className="fi-list">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;