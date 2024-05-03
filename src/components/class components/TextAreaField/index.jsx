import React from "react";

class TextAreaField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: null,
    };
  }

  textareaChange = (event) => {
    this.setState({ textareaValue: event.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          cols="30"
          rows="5"
          value={this.state.textareaValue}
          onChange={this.textareaChange}
        ></textarea>
        <h1>Textarea value: {this.state.textareaValue}</h1>
      </div>
    );
  }
}

export default TextAreaField;
