import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DatePick extends React.Component {
  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return <DatePicker selected={this.state.startDate} />;
  }
}
