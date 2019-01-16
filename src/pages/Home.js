import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { addDays } from "date-fns";

import ContentList from "../components/ContentList";
import imgAvatar from "../assets/images/avatar.jpeg";
import imgSteak from "../assets/images/steak.jpeg";

const Container = styled.div`
  padding-top: 54px;
  background: #efefef;

  @media screen and (min-width: 480px) {
    padding-top: 128px;
    padding-bottom: 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  @media screen and (min-width: 480px) {
    width: 420px;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: "1",
          avatar: imgAvatar,
          username: "eric.chef",
          image: imgSteak,
          totalLikes: 0,
          totalComments: 0,
          text: "I have a love affair with barbecue ribs.",
          isLiked: false,
          isBookmarked: false
        },
        {
          id: "2",
          avatar: imgAvatar,
          username: "eric.chef",
          image: imgSteak,
          totalLikes: 1,
          totalComments: 1,
          timestamp: addDays(new Date(), -2),
          text:
            "I have a love affair with barbecue ribs, especially baby back ribs.",
          isLiked: true,
          isBookmarked: false
        },
        {
          id: "3",
          avatar: imgAvatar,
          username: "eric.chef",
          image: imgSteak,
          totalLikes: 120,
          totalComments: 1435,
          timestamp: addDays(new Date(), -32),
          text:
            "I have a love affair with barbecue ribs, especially baby back ribs. I don’t usually write product reviews, but when I find something that I find especially good, useful, or handy, I want to share the information. Just recently, I discovered just such an item. Believe it or not, it’s barbecue ribs made by Lloyds BBQ. @beefresto #meat #grilled",
          isLiked: true,
          isBookmarked: true
        }
      ]
    };

    this.like = this.like.bind(this);
    this.bookmark = this.bookmark.bind(this);
    this.comment = this.comment.bind(this);
    this.show = this.show.bind(this);
  }

  like(id) {
    this.setState(prevState => ({
      items: prevState.items.map(item => {
        if (item.id === id) {
          return { ...item, isLiked: !item.isLiked };
        }

        return item;
      })
    }));
  }

  bookmark(id) {
    this.setState(prevState => ({
      items: prevState.items.map(item => {
        if (item.id === id) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }

        return item;
      })
    }));
  }

  comment(id) {
    alert(`comment on content-${id}`);
  }

  show(id) {
    alert(`show content-${id}`);
  }

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Helmet>
          <title>Kilogram | Home</title>
        </Helmet>
        <Wrapper>
          <ContentList
            items={items}
            onClickItem={this.show}
            onClickLike={this.like}
            onClickBookmark={this.bookmark}
            onClickComment={this.comment}
          />
        </Wrapper>
      </Container>
    );
  }
}

Home.propTypes = {};

export default Home;
