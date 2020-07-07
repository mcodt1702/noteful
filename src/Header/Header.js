import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="headerstyling">
          <Link to="/">NOTEFUL</Link>
        </header>
      </>
    );
  }
}
