import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router-dom";
import { addDays } from "date-fns";

import ContentList from "../ContentList";
import imgAvatar from "../../assets/images/avatar.jpeg";
import imgSteak from "../../assets/images/steak.jpeg";

const items = [
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
    text: "I have a love affair with barbecue ribs, especially baby back ribs.",
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
];

storiesOf("ContentList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ContentList
      items={items}
      onClickItem={id => action(`clicked - ${id}`)()}
      onClickLike={id => action(`liked - ${id}`)()}
      onClickComment={id => action(`commented - ${id}`)()}
      onClickBookmark={id => action(`bookmarked - ${id}`)()}
    />
  ));
