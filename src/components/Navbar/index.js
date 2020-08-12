import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
<div className="m-auto">
<h1>Employee Directory</h1>
<p>Click on the column names to filter by category or type in the search box to narrow results</p>

</div>

    </nav>
  );
}

export default Navbar;