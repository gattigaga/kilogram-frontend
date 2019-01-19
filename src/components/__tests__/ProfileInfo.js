import React from "react";
import { fireEvent } from "react-testing-library";

import ProfileInfo from "../ProfileInfo";
import { renderWithRouter } from "../../helpers/testing";

jest.mock("../Avatar", () => () => <div data-testid="avatar" />);
jest.mock("../Stat", () => ({ label }) => (
  <div data-testid={`stat-${label}`} />
));

describe("ProfileInfo", () => {
  it("should render correctly", () => {
    const { getByText, queryByText, getByTestId } = renderWithRouter(
      <ProfileInfo
        avatar="profile.jpeg"
        name="Eric Burgerplate"
        username="eric.chef"
        bio="American Chef, but currently work at Indonesia Restaurant."
        totalPosts={1324}
        totalFollowers={2424}
        totalFollowing={325}
      />
    );

    getByTestId("avatar");
    getByTestId("stat-posts");
    getByTestId("stat-followers");
    getByTestId("stat-following");
    getByText(/Eric/i);
    getByText(/American/i);
    expect(queryByText(/Edit/i)).toBeNull();
  });

  it("should render as my own profile", () => {
    const { getByText, getByTestId, history } = renderWithRouter(
      <ProfileInfo
        avatar="profile.jpeg"
        name="Eric Burgerplate"
        username="eric.chef"
        bio="American Chef, but currently work at Indonesia Restaurant."
        totalPosts={1324}
        totalFollowers={2424}
        totalFollowing={325}
        isMe
      />
    );

    getByTestId("avatar");
    getByTestId("stat-posts");
    getByTestId("stat-followers");
    getByTestId("stat-following");
    getByTestId("stat-following");
    getByText(/Eric/i);
    getByText(/American/i);

    fireEvent.click(getByText(/Edit/i));
    expect(history.location.pathname).toBe("/edit-profile");
  });
});
