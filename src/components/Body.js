import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import moment from "moment";
import InfoToggle from "./InfoToggle";
import ArchiveModal from "./ArchiveModal";

function Body() {
  const [info, setInfo] = useState([]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [count, setCount] = useState(1);

  function handleDateSubtract() {
    setDate(
      moment()
        .clone()
        .subtract(count, "days")
        .format("YYYY-MM-DD")
    );
    setCount(count + 1);
  }

  function handleDateAdd() {
    setDate(
      moment()
        .clone()
        .add(count, "days")
        .format("YYYY-MM-DD")
    );
    setCount(count - 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DzlN59i0YZt0PrAnZUPiM3ScrJK4YkxS02vach8M&date=${date}`
      )
      .then(response => {
        console.log(response);
        setInfo(response.data);
      });
  }, [date]);
  return (
    <div className="body-container">
      <Header date={info.date} />
      <div className="title">
        <h2>{info.title}</h2>
      </div>
      <ArchiveModal />
      <div className="date-comp">
        <span className="date-picker">
          <button
            onClick={() => {
              handleDateSubtract();
            }}
          >
            Previous Posts
          </button>
          {/* <Datepick /> */}
          <button
            onClick={() => {
              handleDateAdd();
            }}
          >
            Newer Posts
          </button>
        </span>
      </div>

      <img src={info.url} className="image" alt={info.title} />
      <InfoToggle explanation={info.explanation} />
      {/* <p className="explanation">{info.explanation}</p> */}
    </div>
  );
}

export default Body;
