import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <ul className="main-navbar">
      <div className="logo nav-group">Exchangr</div>
      <div className="searchbar nav-group">Search</div>
      <div className="user-link nav-group">user</div>
    </ul>
  );
}
