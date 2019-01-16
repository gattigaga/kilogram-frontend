import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";
import ContentMenu from "./ContentMenu";
import ContentText from "./ContentText";
import ContentFooter from "./ContentFooter";

const Container = styled.div`
  padding-bottom: 32px;
  background: white;

  @media screen and (min-width: 480px) {
    margin-bottom: 24px;
    padding-bottom: 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  cursor: pointer;
`;

const Content = ({
  avatar,
  username,
  image,
  totalLikes,
  totalComments,
  text,
  timestamp,
  onClick,
  onClickLike,
  onClickComment,
  onClickBookmark,
  isLiked,
  isBookmarked
}) => {
  return (
    <Container>
      <ContentHeader avatar={avatar} username={username} />
      <Image src={image} alt={`@${username}`} onClick={onClick} />
      <ContentMenu
        onClickLike={onClickLike}
        onClickComment={onClickComment}
        onClickBookmark={onClickBookmark}
        isLiked={isLiked}
        isBookmarked={isBookmarked}
      />
      <ContentText
        totalLikes={totalLikes}
        username={username}
        text={text}
        onClick={onClick}
      />
      <ContentFooter
        timestamp={timestamp}
        totalComments={totalComments}
        onClick={onClick}
      />
    </Container>
  );
};

Content.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  image: PropTypes.string,
  totalLikes: PropTypes.number,
  totalComments: PropTypes.number,
  text: PropTypes.string,
  timestamp: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  onClickLike: PropTypes.func,
  onClickComment: PropTypes.func,
  onClickBookmark: PropTypes.func,
  isLiked: PropTypes.bool,
  isBookmarked: PropTypes.bool
};

export default Content;
