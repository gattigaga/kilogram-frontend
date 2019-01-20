import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PropTypes from "prop-types";
import "typeface-roboto";

import NotificationList from "../components/NotificationList";
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
  padding: 16px;
  padding-bottom: 1px;

  @media screen and (min-width: 640px) {
    padding: 32px;
    padding-bottom: 10px;
  }
`;

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
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
      ]
    };
  }

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Helmet>
          <title>Kilogram | Notifications</title>
        </Helmet>
        <Wrapper>
          <Detail>
            <NotificationList items={items} />
          </Detail>
        </Wrapper>
      </Container>
    );
  }
}

Notifications.propTypes = {};

export default Notifications;
