import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CellWrapper = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${props => (props.isClicked ? '#3ecedf' : '#d7d3d2')};
  color: ${props => (props.isClicked ? '#ffffff' : '#393838')};
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  border: 1px solid #ffffff;
  transition: ${props => !props.disabled && 'all 0.3s ease-in-out'};
  transition-property: ${props =>
    !props.disabled && 'box-shadow, color, background-color'};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  ${props =>
    !props.disabled &&
    `&:hover {
    box-shadow: ${`inset 0 0 0 3px ${props.isClicked ? '#d7d3d2' : '#3ecedf'}`};
    transition: 'all 0.3s ease-in-out';
    transition-property: 'box-shadow, color, background-color';
  }`};
`;

export class Cell extends Component {
  static propTypes = {
    children: PropTypes.number.isRequired,
    currentNumber: PropTypes.number.isRequired,
  };

  state = {
    isClicked: false,
  };

  handleClick = () => {
    if (!this.handleDisabled()) {
      this.setState(state => ({
        ...state,
        isClicked: !this.state.isClicked,
      }));
    }
  };

  handleDisabled = () => this.props.currentNumber !== this.props.children;

  render() {
    const {
      props: { children },
      state: { isClicked },
    } = this;

    return (
      <CellWrapper
        onClick={this.handleClick}
        isClicked={isClicked}
        disabled={this.handleDisabled()}
      >
        {children}
      </CellWrapper>
    );
  }
}

export default Cell;
