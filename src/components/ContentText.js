import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { compose, map, split } from "lodash/fp";
import uuid from "uuid/v4";
import "typeface-roboto";

const Container = styled.div`
  background: white;
  padding: 6px 16px;
`;

const Likes = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 2px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.5em;
  margin: 0px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

const More = styled(Text.withComponent("span"))`
  color: #999;
  margin-left: 8px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Username = styled(Likes.withComponent(StyledLink))`
  margin-right: 8px;
`;

const RefLink = styled(StyledLink)`
  font-family: Roboto;
  color: #273c75;
  margin-right: 0.5em;
`;

class ContentText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };

    this.specifyTextType = this.specifyTextType.bind(this);
    this.expand = this.expand.bind(this);
  }

  /**
   * Replace hashtag or username tag text with link.
   *
   * @param {string} word Text splitted as word.
   * @returns {string|object} Replaced word.
   * @memberof ContentText
   */
  specifyTextType(word) {
    const initial = word[0];
    const isUsername = initial === "@" && word.match(/@/g).length === 1;
    const isHashtag = initial === "#" && word.match(/#/g).length === 1;

    if (isUsername || isHashtag) {
      const link = isUsername ? `/${word}` : `/hashtag/${word.slice(1)}`;

      return (
        <RefLink
          key={uuid()}
          to={link}
          onClick={event => event.stopPropagation()}
        >
          {word}
        </RefLink>
      );
    }

    return `${word} `;
  }

  /**
   * Expand to show full text.
   *
   * @param {object} event DOM Event
   * @memberof ContentText
   */
  expand(event) {
    event.stopPropagation();
    this.setState({ isExpanded: true });
  }

  render() {
    const { isExpanded } = this.state;
    const { totalLikes, username, text, onClick } = this.props;
    const maxChars = 80;
    const hasLongText = text.length > maxChars;
    const excerpt = hasLongText ? `${text.slice(0, maxChars)}...` : text;
    const parse = compose(
      map(this.specifyTextType),
      split(" ")
    );

    const parsedText = parse(text);
    const parsedExcerpt = parse(excerpt);
    const separatorPattern = /\B(?=(\d{3})+(?!\d))/g;

    return (
      <Container data-testid="container" onClick={onClick}>
        {totalLikes && (
          <Likes>{`${totalLikes}`.replace(separatorPattern, ",")} likes</Likes>
        )}
        <Text>
          <Username
            to={`/@${username}`}
            onClick={event => event.stopPropagation()}
          >
            {username}
          </Username>
          {isExpanded ? parsedText : parsedExcerpt}
          {hasLongText && !isExpanded && (
            <More data-testid="more" onClick={this.expand}>
              more
            </More>
          )}
        </Text>
      </Container>
    );
  }
}

ContentText.propTypes = {
  totalLikes: PropTypes.number,
  username: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default ContentText;
