import React, { Component } from 'react';
import ChildClass from './ChildClass';
import { ProfileContext } from './ProfileContext';

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      text: '',
      text2: '',
      anotherProp: 'prop',
    };
    this.updateText = this.updateText.bind(this);
  }
  updateText(newText) {
    // console.log('this', this);
    this.setState({ text: newText });
  }
  updateText2(newText) {
    // console.log('this', this);
    this.setState({ text2: newText });
  }
  // useEffect(() => {
  //   console.log('run once at first and never more');
  // }, []);
  componentDidMount() {
    console.log('class component once and never more');
  }
  // useEffect(() => {
  //   console.log('run first and only when text2 is updated');
  // }, [text2]);
  componentDidUpdate(prevProps, prevState) {
    console.log('prev', prevState);
    console.log('render class component every update');
    if (prevState.text !== this.state.text) {
      console.log('render when text changes');
    }
=======
      name: 'Arthur',
      name2: '2',
    };
    this.setName = this.setName.bind(this);
  }
  setName(newName) {
    this.setState({ name: newName });
  }
  setName2(newName) {
    this.setState({ name2: newName });
  }

  componentDidMount() {
    console.log('run once and never more');
  }
  //{name:'', name2:''} - prevState
  //{name:'a', name2:''} - state
  componentDidUpdate(gfdsgsdf, prevState) {
    // if (prevState.name !== this.state.name) {
    //   console.log('runs when name changes');
    // }
    console.log('runs every update');
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  }
  render() {
    return (
      <div className='component'>
        <h1>Class Component</h1>
<<<<<<< HEAD
        <h2>Hi, my name is {this.context.profile.name}</h2>
        {this.state.text}
        <input
          type='text'
          value={this.state.text2}
          onChange={(e) => this.updateText2(e.target.value)}
        />
        <ChildClass text={this.state.text} updateText={this.updateText} />
=======
        <h2>Hello, {this.state.name}!</h2>
        <p>{this.context.someValue}</p>
        <input
          type='text'
          value={this.state.name2}
          onChange={(e) => this.setName2(e.target.value)}
        />
        <ChildClass name={this.state.name} setName={this.setName} />
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      </div>
    );
  }
}
ClassComponent.contextType = ProfileContext;
