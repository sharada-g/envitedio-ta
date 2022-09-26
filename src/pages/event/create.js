import React from "react";

import styled from "styled-components";

import FormContainer from "../../components/event/create/formContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function EventCreate() {
  return (
    <Container>
      <FormContainer />
    </Container>
  );
}

export default EventCreate;
