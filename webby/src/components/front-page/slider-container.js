import React, { Component } from "react"

const classNames = [
    "first-header",
    "second-header",
    "third-header"
  ];
  

export default class SliderContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }

  render() {
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
        <div className={className}>
        <div className="content">
          {this.props.children}
          </div>
          </div>

    )
  }

}