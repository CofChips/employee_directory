import React from "react";
import "./style.css";

function Search(props){

    return(
        <div className="search m-auto pt-5">
        <input type="search" className="form-control" id="search" placeholder="Search" onChange={props.onChange}/>
      </div>
    )
}

export default Search;

