import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  inputChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
        </div>
        <h1>Input value: {this.state.inputValue}</h1>
      </div>
    );
  }
}

export default InputField;
