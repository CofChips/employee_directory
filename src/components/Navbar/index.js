import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light background text-center">
      <div className="m-auto">
        <h1 className="font">Employee Directory</h1>
        <p>Click on the carets in the column header to filter by category or type in the search box to narrow results</p>
      </div>
    </nav>
  );
}

export default Navbar;