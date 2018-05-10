import React from 'react';
import styled from 'styled-components';
import PreviousBalls from '../../../../components/BallInfo/PreviousBalls/index';
import LastBall from '../../../../components/BallInfo/LastBall/index';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
`;

const Header = () => (
  <HeaderWrapper>
    <LastBall dimension={25} numberData={1} textData="Last Ball" />
    <PreviousBalls
      dimension={15}
      numData={[1, 2, 3, 4]}
      textVal="PREVIOUS BALLS"
    />
  </HeaderWrapper>
);

export default Header;
