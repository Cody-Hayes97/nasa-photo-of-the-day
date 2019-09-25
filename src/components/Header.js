import React from "react";

function Header(props) {
  return (
    <div>
      <h1 className="npod">NASA Photo of the Day</h1>
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>Image</li>
        </ul>
        <ul>
          <li>About</li>
        </ul>
        <ul>
          <li>Contact</li>
        </ul>
      </nav>
      <span className="date">{props.date}</span>
    </div>
  );
}

export default Header;
