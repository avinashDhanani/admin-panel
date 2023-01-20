import React, { useState } from "react";
import "./Navbar.css";

function Navbar({searchFunction}) {
  const [searchText, setSearchText] = useState("");
  const onSearchbtnClick = () =>{
    console.log("in search button")
    searchFunction(searchText);
  }
  return (
    <div className="admin-main-div">
      <div>
        <h1>Admin</h1>
      </div>
      <div>
        <input
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search"
        />
        <button onClick={onSearchbtnClick}>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
