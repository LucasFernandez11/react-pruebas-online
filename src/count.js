import React from 'react';

export default class CounterClicks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((prevState) => ({
      numClicks: prevState.numClicks + 1,
    }));
  }
  render() {
    const { numClicks } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>contador</button>
        <h2> Clicks: {numClicks}</h2>
      </div>
    );
  }
}
