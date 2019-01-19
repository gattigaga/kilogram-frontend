import React from "react";
import { fireEvent } from "react-testing-library";

import NotificationItem from "../NotificationItem";
import { renderWithRouter } from "../../helpers/testing";

jest.mock("../Avatar", () => () => <div data-testid="avatar" />);

describe("NotificationItem", () => {
  it("should render correctly and clickable", () => {
    const { getByText, getByTestId, history } = renderWithRouter(
      <NotificationItem
        to="/@eric.chef/135645/3423"
        avatar="avatar.jpeg"
        image="steak.jpeg"
        username="eric.chef"
        text="reply your comment: Yeah bro, I like it. It was delicious, cheap, and I sure everyone will like it."
      />
    );

    getByTestId("avatar");

    fireEvent.click(getByText(/Yeah/i));
    expect(history.location.pathname).toBe("/@eric.chef/135645/3423");
  });
});
