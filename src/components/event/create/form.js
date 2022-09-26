import React from "react";
import { useField } from "formik";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
      flex-direction: row;
      justify-content: space-between;
      margin: 2px;
    }

    & > label {
      @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
        margin-right: 10px;
      }
    }

    & > input {
      border: 1px solid ${(props) => props.theme.colors.primary1};
      border-radius: 5px;
      outline: none;

      padding: 5px;

      @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
        flex: 1;
      }
    }
  }

  & > span {
    color: red;
    font-size: 0.8rem;
  }
`;

function CustomForm({ lable, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Container>
        <div>
          <label>{lable}</label>
          <input {...field} {...props} />
        </div>
        {meta.touched && meta.error ? <span>{meta.error}</span> : null}
      </Container>
    </>
  );
}

export default CustomForm;
