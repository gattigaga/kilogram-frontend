import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "typeface-roboto";

import Avatar from "./Avatar";

const Container = styled.div`
  border-bottom: 1px solid #ddd;
  background: white;
  display: flex;
  align-items: center;
  padding: 6px 16px;
`;

const Username = styled(Link)`
  text-decoration: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin-left: 12px;

  @media screen and (min-width: 480px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-top: 2px;
  width: 36px;
  height: 36px;

  @media screen and (min-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

const ContentHeader = ({ avatar, username }) => (
  <Container>
    <StyledAvatar src={avatar} alt={`@${username}`} to={`/@${username}`} />
    <Username to={`/@${username}`}>{username}</Username>
  </Container>
);

ContentHeader.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string
};

export default ContentHeader;
