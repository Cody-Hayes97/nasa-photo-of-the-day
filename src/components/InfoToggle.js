import React, { Component } from "react";
import { Collapse, Button, CardBody } from "reactstrap";

class InfoToggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Click for Information
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <CardBody color="black">{this.props.explanation}</CardBody>
        </Collapse>
      </div>
    );
  }
}

export default InfoToggle;
