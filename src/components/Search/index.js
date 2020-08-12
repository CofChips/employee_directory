import React from "react";
import "./style.css";

function Search(){

    return(
        <div className="search m-auto pt-5">
        <input type="search" className="form-control" id="search" placeholder="Search"/>
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
    )
}

export default Search;

