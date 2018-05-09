import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  height: 40px;
  width: 100px;
  border: 1px solid #989a9b;
  border-radius: 5px;
  background-color: #cdd2d4;
  text-align: center;
  vertical-align: middle;
  line-height: 35px;
  transition: all 0.8s ease-in-out;
  transition-property: background-color box-shadow;
  &:hover {
    background-color: #acb0b3;
    box-shadow: 0px 15px 10px -10px #373839;
    transform: translateY(3px);
    transition: all 0.3s ease-in-out;
    transition-property: background-color box-shadow;
  }
`;

const Button = ({ children, onClick }) => (
  <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
