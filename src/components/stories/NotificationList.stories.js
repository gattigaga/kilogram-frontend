import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import NotificationList from "../NotificationList";
import imgAvatar from "../../assets/images/avatar.jpeg";
import imgSteak from "../../assets/images/steak.jpeg";

const items = [
  {
    id: "1",
    avatar: imgAvatar,
    username: "eric.chef",
    image: imgSteak,
    text:
      "reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it.",
    to: "/@eric.chef/135645/3423"
  },
  {
    id: "2",
    avatar: imgAvatar,
    username: "eric.chef",
    image: imgSteak,
    text:
      "reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it.",
    to: "/@eric.chef/135645/3423"
  },
  {
    id: "3",
    avatar: imgAvatar,
    username: "eric.chef",
    image: imgSteak,
    text:
      "reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it.",
    to: "/@eric.chef/135645/3423"
  }
];

const Container = styled.div`
  max-width: 480px;
`;

storiesOf("NotificationList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      <Container>{story()}</Container>
    </MemoryRouter>
  ))
  .add("default", () => <NotificationList items={items} />);
