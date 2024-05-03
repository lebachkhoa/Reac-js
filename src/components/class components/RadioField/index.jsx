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

class RadioField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceColor: null,
    };
  }

  radioChange = (colorId) => {
    this.setState({ choiceColor: colorId });
  };

  render() {
    const { choiceColor } = this.state;
    return (
      <div>
        {colors.map((color) => (
          <div key={color.id}>
            <input
              type="radio"
              checked={choiceColor === color.id}
              onChange={() => this.radioChange(color.id)}
            />
            {color.color}
          </div>
        ))}
        <h1>
          Radio value: {" "}
          {choiceColor !== null ? colors[choiceColor - 1].color : "None"}
        </h1>
      </div>
    );
  }
}

export default RadioField;
