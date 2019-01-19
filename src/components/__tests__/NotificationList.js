import React from "react";
import { render } from "react-testing-library";

import NotificationList from "../NotificationList";

jest.mock("../NotificationItem", () => () => <div data-testid="item" />);

const items = [
  {
    id: "1",
    avatar: "avatar.jpeg",
    username: "eric.chef",
    image: "steak.jpeg",
    text:
      "reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it.",
    to: "/@eric.chef/135645/3423"
  },
  {
    id: "2",
    avatar: "avatar.jpeg",
    username: "eric.chef",
    image: "steak.jpeg",
    text:
      "reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it.",
    to: "/@eric.chef/135645/3423"
  },
  {
    id: "3",
    avatar: "avatar.jpeg",
    username: "eric.chef",
    image: "steak.jpeg",
    text:
      "reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it.",
    to: "/@eric.chef/135645/3423"
  }
];

describe("NotificationItem", () => {
  it("should render correctly", () => {
    const { queryAllByTestId } = render(<NotificationList items={items} />);

    expect(queryAllByTestId("item")).toHaveLength(3);
  });
});
