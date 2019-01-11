import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import ContentHeader from "../ContentHeader";
import imgAvatar from "../../assets/images/avatar.jpeg";

storiesOf("ContentHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ContentHeader to="/eric" avatar={imgAvatar} username="eric.chef" />
  ));
