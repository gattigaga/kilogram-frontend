import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

import Stat from "./Stat";
import Avatar from "./Avatar";
import Button from "./Button";

const Container = styled.div`
  padding: 24px;

  @media screen and (min-width: 480px) {
    padding: 48px;
  }
`;

const Info = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledAvatar = styled(Avatar)`
  min-width: 72px;
  min-height: 72px;
  max-width: 128px;
  max-height: 128px;
  width: 23vw;
  height: 23vw;
`;

const StatWrapper = styled.div`
  width: 63%;
  margin-left: auto;

  @media screen and (min-width: 480px) {
    width: 50%;
  }
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Name = styled.h1`
  font-family: Roboto;
  font-size: 12px;
  color: black;
  margin-top: 0px;
  margin-bottom: 8px;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;

const Bio = styled(Name.withComponent("p"))`
  color: #777;
  line-height: 1.5em;
  margin-bottom: 0px;
`;

const ProfileInfo = ({
  avatar,
  name,
  username,
  bio,
  totalPosts,
  totalFollowers,
  totalFollowing,
  isMe
}) => (
  <Container>
    <Info>
      <StyledAvatar to={`/@${username}`} src={avatar} />
      <StatWrapper>
        <StatRow>
          <Stat label="posts" value={totalPosts} />
          <Stat label="followers" value={totalFollowers} />
          <Stat label="following" value={totalFollowing} />
        </StatRow>
        {isMe && <Button label="Edit Profile" to="/edit-profile" />}
      </StatWrapper>
    </Info>
    <Name>{name}</Name>
    <Bio>{bio}</Bio>
  </Container>
);

ProfileInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  totalPosts: PropTypes.number,
  totalFollowers: PropTypes.number,
  totalFollowing: PropTypes.number,
  isMe: PropTypes.bool
};

export default ProfileInfo;
