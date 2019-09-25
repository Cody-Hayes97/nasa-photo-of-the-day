import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function Body() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        setInfo(response.data);
      });
  }, []);
  return (
    <div className="body-container">
      <Header date={info.date} />
      <div className="title">
        <h2>{info.title}</h2>
      </div>
      <img src={info.url} className="image" />

      <p className="explanation">{info.explanation}</p>
    </div>
  );
}

export default Body;
