import React from "react";
import { fireEvent } from "react-testing-library";

import Stat from "../Stat";
import { renderWithRouter } from "../../helpers/testing";

describe("Stat", () => {
  it("should render correctly", () => {
    const { getByText } = renderWithRouter(<Stat label="posts" value={1324} />);

    getByText("1,324");
    getByText("posts");
  });

  it("should render correctly with link", () => {
    const { getByText, history } = renderWithRouter(
      <Stat label="followers" value={1324} to="/followers" />
    );

    fireEvent.click(getByText("followers"));
    expect(history.location.pathname).toBe("/followers");
  });
});
