import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PropTypes from "prop-types";
import "typeface-roboto";

import ProfileInfo from "../components/ProfileInfo";
import ContentGrid from "../components/ContentGrid";
import imgAvatar from "../assets/images/avatar.jpeg";
import imgSteak from "../assets/images/steak.jpeg";

const Container = styled.div`
  padding-top: 54px;
  background: #efefef;
  min-height: 100vh;

  @media screen and (min-width: 640px) {
    padding-top: 128px;
    padding-bottom: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  @media screen and (min-width: 640px) {
    width: 640px;
  }
`;

const Detail = styled.div`
  background: white;
`;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: "1",
          image: imgSteak
        },
        {
          id: "2",
          image: imgSteak
        },
        {
          id: "3",
          image: imgSteak
        },
        {
          id: "4",
          image: imgSteak
        },
        {
          id: "5",
          image: imgSteak
        }
      ]
    };

    this.show = this.show.bind(this);
  }

  show(id) {
    alert(`show content-${id}`);
  }

  render() {
    const { items } = this.state;
    const { match } = this.props;
    const { username } = match.params;
    const isMe = true;

    return (
      <Container>
        <Helmet>
          <title>Kilogram | {isMe ? "My Profile" : `@${username}`}</title>
        </Helmet>
        <Wrapper>
          <Detail>
            <ProfileInfo
              avatar={imgAvatar}
              name="Eric Burgerplate"
              username="eric.chef"
              bio="American Chef, but currently work at Indonesia Restaurant."
              totalPosts={1324}
              totalFollowers={2424}
              totalFollowing={325}
            />
            <ContentGrid items={items} onClickItem={console.log} />
          </Detail>
        </Wrapper>
      </Container>
    );
  }
}

Profile.propTypes = {
  match: PropTypes.object
};

export default Profile;
