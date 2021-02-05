import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
`;
const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <header>Live Search MMT</header>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
