import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "typeface-roboto";

const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding: 6px 16px;
`;

const FA = styled(FontAwesomeIcon)`
  font-size: 24px;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    font-size: 32px;
  }
`;

const FALike = styled(FA)`
  margin-right: 16px;
  color: ${({ liked }) => (liked ? "#e74c3c" : "black")};

  @media screen and (min-width: 480px) {
    margin-right: 24px;
  }
`;

const FABookmark = styled(FA)`
  margin-left: auto;
`;

const ContentMenu = ({
  onClickLike,
  onClickComment,
  onClickBookmark,
  isLiked,
  isBookmarked
}) => {
  const prefixLike = isLiked ? "fas" : "far";
  const prefixBookmark = isBookmarked ? "fas" : "far";

  return (
    <Container>
      <FALike
        data-testid="like"
        icon={[prefixLike, "heart"]}
        onClick={onClickLike}
        liked={isLiked}
      />
      <FA
        data-testid="comment"
        icon={["far", "comment"]}
        onClick={onClickComment}
      />
      <FABookmark
        data-testid="bookmark"
        icon={[prefixBookmark, "bookmark"]}
        onClick={onClickBookmark}
      />
    </Container>
  );
};

ContentMenu.propTypes = {
  onClickLike: PropTypes.func,
  onClickComment: PropTypes.func,
  onClickBookmark: PropTypes.func,
  isLiked: PropTypes.bool,
  isBookmarked: PropTypes.bool
};

export default ContentMenu;
