import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch as fasSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Button from "../Button";

library.add([fasSearch]);

storiesOf("Button", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <Button label="Edit Profile" to="/edit-profile" />);
