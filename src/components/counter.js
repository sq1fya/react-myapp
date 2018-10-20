import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag2', 'tag3']
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      <ul>
        {this.state.tags.map( tag => <li>{tag}</li>)}
      </ul>
      </div>
    );
  }
}

export default Counter;
