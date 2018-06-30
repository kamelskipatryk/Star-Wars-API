import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    render() {
      return (
        <div>
          <p>It is {this.state.date.toLocaleTimeString()}</p>
        </div>
      );
    }
  }

  export default Clock;