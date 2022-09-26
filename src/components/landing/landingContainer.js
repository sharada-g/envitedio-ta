import React from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import HeaderH1 from "../shared/header";
import ButtonBtn from "../shared/button";

const Container = styled.div`
  & > p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    text-align: center;

    color: ${(props) => props.theme.colors.neutral1};

    margin: 19px 27px 0 27px;

    @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
      font-size: 24px;
      line-height: 28px;

      margin: 19px 40px 0 40px;
    }
  }

  & > img {
    position: relative;
    width: 165.63px;
    height: 292px;

    margin-top: 36px;
    left: calc(50% - 165.63px / 2 + 0.32px);

    @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
      width: 311px;
      height: 548.27px;

      left: calc(50% - 311px / 2 + 0.5px);
      margin-top: 55px;
    }
  }
`;

function LandingContainer() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/create");
  };

  return (
    <>
      <Container>
        <HeaderH1>
          Imagine If
          <br /> <span>Snapchat</span>
          <br /> had events.
        </HeaderH1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <img src="/images/Landingpageimage.svg" alt="landing" />
        <ButtonBtn onClick={handleOnClick}>🎉 Create my event</ButtonBtn>
      </Container>
    </>
  );
}

export default LandingContainer;
