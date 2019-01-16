import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import Stat from "../Stat";

const Container = styled.div`
  width: 64px;
`;

storiesOf("Stat", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      <Container>{story()}</Container>
    </MemoryRouter>
  ))
  .add("default", () => <Stat label="posts" value={1423} />)
  .add("with  link", () => (
    <Stat label="followers" to="/followers" value={3432} />
  ));
