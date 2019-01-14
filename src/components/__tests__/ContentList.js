import React from "react";
import { render, fireEvent } from "react-testing-library";

import ContentList from "../ContentList";

jest.mock("../Content", () => () => <div data-testid="content" />);

const items = [
  {
    id: "1",
    avatar: "avatar.jpeg",
    username: "eric.chef",
    image: "steak.jpeg",
    totalLikes: 0,
    totalComments: 0,
    text: "I have a love affair with barbecue ribs.",
    isLiked: false,
    isBookmarked: false
  },
  {
    id: "2",
    avatar: "avatar.jpeg",
    username: "eric.chef",
    image: "steak.jpeg",
    totalLikes: 1,
    totalComments: 1,
    text: "I have a love affair with barbecue ribs, especially baby back ribs.",
    isLiked: true,
    isBookmarked: false
  },
  {
    id: "3",
    avatar: "avatar.jpeg",
    username: "eric.chef",
    image: "steak.jpeg",
    totalLikes: 120,
    totalComments: 1435,
    text:
      "I have a love affair with barbecue ribs, especially baby back ribs. I don’t usually write product reviews, but when I find something that I find especially good, useful, or handy, I want to share the information. Just recently, I discovered just such an item. Believe it or not, it’s barbecue ribs made by Lloyds BBQ. @beefresto #meat #grilled",
    isLiked: true,
    isBookmarked: true
  }
];

describe("ContentList", () => {
  it("should render correctly", () => {
    const { queryAllByTestId } = render(<ContentList items={items} />);

    expect(queryAllByTestId("content")).toHaveLength(3);
  });
});
