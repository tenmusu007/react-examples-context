import React, { Component } from 'react';
import { MdOutlineRemoveShoppingCart, MdAddShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import './Button.css';

const variant = {
  add: {
    icon: <MdAddShoppingCart />,
    bgColor: 'green',
    color: 'white',
  },
  remove: {
    icon: <MdOutlineRemoveShoppingCart />,
    bgColor: 'red',
    color: 'white',
  },
};

const StyledButton = styled.button`
  background-color: ${({ type }) => variant[type].bgColor};
  color: ${({ type }) => variant[type].color};
`;

export default class Button extends Component {
  render() {
    console.log(this.props);
    return (
      //   <StyledButton type={this.props.type}>
      //     {variant[this.props.type].icon}
      //     {this.props.label}
      //   </StyledButton>
      <button className='button'>{this.props.label}</button>
    );
  }
}
