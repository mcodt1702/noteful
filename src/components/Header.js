import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="headerstyling">
      <Link to="/">NOTEFUL</Link>
    </header>
  );
}
