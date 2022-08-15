import React, { Component } from 'react';

export default class ChildClass extends Component {
  render() {
    return (
      <div className='component'>
        <h1>Child Class</h1>
        <input
          type='text'
          value={this.props.text}
          onChange={(e) => this.props.updateText(e.target.value)}
        />
      </div>
    );
  }
}
