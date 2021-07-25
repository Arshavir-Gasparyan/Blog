import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleInputChange = (el) => {
    el.preventDefault();
    this.setState({
      value: el.target.value,
    });
    this.props.onChange(el.target.value);
  };
  render() {
    const { type, value, placeholder, name, onClick } = this.props;
    const { value: stateValue } = this.state;

    return (
      <input
        type={type}
        value={typeof value === "undefined" ? stateValue : value}
        placeholder={placeholder}
        name={name}
        onClick={onClick}
        onChange={this.handleInputChange}
      />
    );
  }
}
