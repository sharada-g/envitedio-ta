import React from "react";

import styled from "styled-components";

import LandingContainer from "../components/landing/landingContainer";

const Container = styled.div`
  padding: 94px 27px 0 27px;

  @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
    padding: 60px 194px 0 194px;
  }
`;

function Landing() {
  return (
    <Container>
      <LandingContainer />
    </Container>
  );
}

export default Landing;
