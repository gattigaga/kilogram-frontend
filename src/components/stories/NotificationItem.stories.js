import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import NotificationItem from "../NotificationItem";
import imgAvatar from "../../assets/images/avatar.jpeg";
import imgSteak from "../../assets/images/steak.jpeg";

const Container = styled.div`
  max-width: 480px;
`;

storiesOf("NotificationItem", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      <Container>{story()}</Container>
    </MemoryRouter>
  ))
  .add("default", () => (
    <NotificationItem
      to="/@eric.chef/135645/3423"
      avatar={imgAvatar}
      image={imgSteak}
      username="eric.chef"
      text="reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it."
    />
  ))
  .add("has tag", () => (
    <NotificationItem
      to="/@eric.chef/135645/3423"
      avatar={imgAvatar}
      image={imgSteak}
      username="eric.chef"
      text="reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it @james."
    />
  ));
