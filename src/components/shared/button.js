import React from "react";

import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 187px;
  height: 50px;

  margin-top: 34px;
  left: calc(50% - 187px / 2);

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary3} 3.25%,
    ${(props) => props.theme.colors.primary4} 100%
  );

  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;

  color: #ffffff;

  @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
    width: 320px;
    height: 55px;
    left: calc(50% - 320px / 2);

    font-size: 20px;
    line-height: 23px;
  }
`;

function ButtonBtn({ onClick, children }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}

export default ButtonBtn;
