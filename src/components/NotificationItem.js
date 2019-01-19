import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uuid from "uuid/v4";
import { Link } from "react-router-dom";
import "typeface-roboto";

import Avatar from "./Avatar";

const Container = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0px 16px;
`;

const StyledAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 1.5em;
`;

const Username = styled.span`
  font-weight: bold;
  font-family: Roboto;
`;

const Content = styled(Username)`
  font-weight: normal;
`;

const Tag = styled(Content)`
  color: #273c75;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

const NotificationItem = ({ to, avatar, image, username, text }) => {
  const parsedText = text.split(" ").map(word => {
    const initial = word[0];
    const isUsername = initial === "@" && word.match(/@/g).length === 1;
    const isHashtag = initial === "#" && word.match(/#/g).length === 1;

    if (isUsername || isHashtag) {
      return (
        <>
          <Tag key={uuid()}>{word}</Tag>{" "}
        </>
      );
    }

    return `${word} `;
  });

  return (
    <Container>
      <StyledAvatar src={avatar} alt={`@${username}`} to={`/@${username}`} />
      <StyledLink to={to}>
        <Text>
          <Username>{username}</Username> <Content>{parsedText}</Content>
        </Text>
      </StyledLink>
      <Image src={image} />
    </Container>
  );
};

NotificationItem.propTypes = {
  to: PropTypes.string,
  avatar: PropTypes.string,
  image: PropTypes.string,
  username: PropTypes.string,
  text: PropTypes.string
};

export default NotificationItem;
