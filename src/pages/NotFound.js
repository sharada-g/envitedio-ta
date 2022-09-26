import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import HeaderH1 from "../components/shared/header";
import ButtonBtn from "../components/shared/button";

const Container = styled.div`
  padding: 94px 27px 0 27px;

  @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
    padding: 60px 194px 0 194px;
  }
`;

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <HeaderH1>
        4<span>0</span>4
        <br />
        Page Not Found
      </HeaderH1>

      <ButtonBtn onClick={handleGoBack}> Go to home page</ButtonBtn>
    </Container>
  );
}

export default NotFound;
