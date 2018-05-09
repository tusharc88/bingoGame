import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagWrapper = styled.div`
  height: ${props => `${props.dimension * 2}px`};
  width: ${props => `${props.dimension * 3}px`};
  background-color: #edf0f3;
  text-align: center;
  vertical-align: middle;
  font-size: ${props => `${props.dimension}px`};
  line-height: ${props => `${props.dimension * 2}px`};
  border-radius: 5px;
  ${props => props.hasBorder && `border: 2px solid #3ecedf;`};
`;

const Tag = ({ children, dimension, hasBorder }) => (
  <TagWrapper dimension={dimension} hasBorder={hasBorder}>
    {children}
  </TagWrapper>
);

Tag.propTypes = {
  children: PropTypes.number.isRequired,
  dimension: PropTypes.number.isRequired,
  hasBorder: PropTypes.bool,
};

Tag.defaultProps = {
  hasBorder: false,
};

export default Tag;
