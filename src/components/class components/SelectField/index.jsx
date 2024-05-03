import React from "react";

const colors = [
  {
    id: 1,
    color: "Red",
  },
  {
    id: 2,
    color: "Green",
  },
  {
    id: 3,
    color: "Blue",
  },
  {
    id: 4,
    color: "White",
  },
];

class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectColor: "Red",
    };
  }

  selectChange = (event) => {
    this.setState({ selectColor: event.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.selectChange}>
          {colors.map((color) => (
            <option key={color.id} value={color.color}>
              {color.color}
            </option>
          ))}
        </select>
        <h1>Select value: {this.state.selectColor}</h1>
      </div>
    );
  }
}

export default SelectField;
