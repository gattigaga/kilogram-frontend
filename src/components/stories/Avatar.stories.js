import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import Avatar from "../Avatar";
import imgAvatar from "../../assets/images/avatar.jpeg";

storiesOf("Avatar", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <Avatar to="/eric" src={imgAvatar} alt="Eric" size="64px" />
  ));
