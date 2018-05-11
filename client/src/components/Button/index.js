import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  height: 40px;
  width: 100px;
  font-size: 15px;
  border: 1px solid #989a9b;
  border-radius: 5px;
  background-color: #cdd2d4;
  color: #FFF;
  text-align: center;
  vertical-align: middle;
  line-height: 35px;
  cursor: ${props => (!props.disabled ? 'pointer' : 'default')}
  transition: all 0.8s ease-in-out;
  transition-property: background-color box-shadow;
  ${props =>
    !props.disabled &&
    `&:hover {
    background-color: #acb0b3;
    box-shadow: 0px 15px 10px -10px #373839;
    transform: translateY(3px);
    transition: all 0.3s ease-in-out;
    transition-property: background-color box-shadow;
  }`};
`;

const Button = ({ children, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled) onClick();
  };
  return (
    <ButtonWrapper onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
