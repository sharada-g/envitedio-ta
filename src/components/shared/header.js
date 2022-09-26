import React from "react";

import styled from "styled-components";

const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
    font-size: 64px;
    line-height: 64px;
  }

  & > span {
    line-height: 41px;

    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.primary3} 24.2%,
      ${(props) => props.theme.colors.primary4} 120.46%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
      line-height: 74px;
    }
  }
`;

function HeaderH1({ children }) {
  return <Header>{children}</Header>;
}

export default HeaderH1;
