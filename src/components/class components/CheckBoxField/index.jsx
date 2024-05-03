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

class CheckBoxField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkColors: [],
    };
  }

  checkboxChange = (colorId) => {
    if (this.state.checkColors.includes(colorId)) {
      this.setState({
        checkColors: this.state.checkColors
          .filter((color) => color !== colorId)
          .sort(),
      });
    } else {
      this.setState({
        checkColors: [...this.state.checkColors, colorId].sort(),
      });
    }
  };

  render() {
    return (
      <div>
        {colors.map((color) => (
          <div key={color.id}>
            <input
              type="checkbox"
              checked = {this.state.checkColors.includes(color.id)}
              onChange={() => this.checkboxChange(color.id)}
            />
            {color.color}
          </div>
        ))}
        <h1>
          {" "}
          Checkbox value:{" "}
          {this.state.checkColors.length !== 0
            ? this.state.checkColors
                .map((colorId) => colors[colorId - 1].color)
                .join(", ")
            : "Null"}
        </h1>
      </div>
    );
  }
}

export default CheckBoxField;
