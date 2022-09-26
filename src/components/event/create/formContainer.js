import React from "react";
import { useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";
import { createFromValidation } from "../../../utils/fromValidation";

import { useEventContext } from "../../../contexts/eventContext";

import styled from "styled-components";

import HeaderH1 from "../../shared/header";
import ButtonBtn from "../../shared/button";
import CustomForm from "./form";

const GredientHeader = styled.span`
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;

    & > span {
      font-weight: 700;
      @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
        font-size: 32px;
        line-height: 32px;
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      padding: 5px;
    }
    & > button {
      align-self: center;
    }
  }
`;

function FormContainer() {
  const navigate = useNavigate();
  const { setEvent } = useEventContext();

  const formInitialValues = {
    name: "",
    by: "",
    startDate: "",
    endDate: "",
    streetName: "",
    city: "",
    state: "",
    link: "",
  };

  const hadleSubmit = (values, actions) => {
    setEvent(values);
    actions.resetForm();

    navigate("/event");
  };

  return (
    <>
      <HeaderH1>
        Create your <span>Event!</span>
      </HeaderH1>
      <Formik
        initialValues={formInitialValues}
        validationSchema={createFromValidation}
        onSubmit={hadleSubmit}
      >
        <Container>
          <Form>
            <GredientHeader>Event Details</GredientHeader>
            <div>
              <CustomForm
                lable="Event Name"
                name="name"
                type="text"
                placeholder="Event Name"
              />
              <CustomForm
                lable="Hosted By"
                name="by"
                type="text"
                placeholder="Hosted By"
              />
            </div>
            <GredientHeader>Date</GredientHeader>
            <div>
              <CustomForm
                lable="Start Date"
                name="startDate"
                type="datetime-local"
              />
              <CustomForm
                lable="End Date"
                name="endDate"
                type="datetime-local"
              />
            </div>
            <GredientHeader>Street Name</GredientHeader>
            <div>
              <CustomForm
                lable="Street"
                name="streetName"
                type="text"
                placeholder="Street Name"
              />
              <CustomForm
                lable="City"
                name="city"
                type="text"
                placeholder="City"
              />
              <CustomForm
                lable="State"
                name="state"
                type="text"
                placeholder="State"
              />
            </div>
            <GredientHeader>Link</GredientHeader>
            <div>
              <CustomForm
                lable="Link"
                name="link"
                type="text"
                placeholder="http://sharada.info/"
              />
            </div>
            <ButtonBtn type="submit">🎉 Submit</ButtonBtn>
          </Form>
        </Container>
      </Formik>
    </>
  );
}

export default FormContainer;
