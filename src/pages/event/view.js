import React from "react";

import styled from "styled-components";

import ViewContainer from "../../components/event/view/viewContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function EventView() {
  return (
    <Container>
      <ViewContainer />
    </Container>
  );
}

export default EventView;
