import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import ProfileInfo from "../ProfileInfo";
import imgAvatar from "../../assets/images/avatar.jpeg";

const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 640px;
`;

storiesOf("ProfileInfo", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      <Container>
        <Wrapper>{story()}</Wrapper>
      </Container>
    </MemoryRouter>
  ))
  .add("default", () => (
    <ProfileInfo
      avatar={imgAvatar}
      name="Eric Burgerplate"
      username="eric.chef"
      bio="American Chef, but currently work at Indonesia Restaurant."
      totalPosts={1324}
      totalFollowers={2424}
      totalFollowing={325}
    />
  ))
  .add("as my own profile", () => (
    <ProfileInfo
      avatar={imgAvatar}
      name="Eric Burgerplate"
      username="eric.chef"
      bio="American Chef, but currently work at Indonesia Restaurant."
      totalPosts={1324}
      totalFollowers={2424}
      totalFollowing={325}
      isMe
    />
  ));
