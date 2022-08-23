import React, { Component } from 'react';

export default class ChildClass extends Component {
  render() {
    return (
      <div className='component'>
        <h1>Child Class</h1>
        <input
          type='text'
<<<<<<< HEAD
          value={this.props.text}
          onChange={(e) => this.props.updateText(e.target.value)}
=======
          value={this.props.name}
          onChange={(e) => this.props.setName(e.target.value)}
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
        />
      </div>
    );
  }
}
