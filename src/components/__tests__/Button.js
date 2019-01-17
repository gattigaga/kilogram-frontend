import React from "react";
import { fireEvent } from "react-testing-library";

import Button from "../Button";
import { renderWithRouter } from "../../helpers/testing";

describe("Button", () => {
  it("should render correctly and clickable", () => {
    const { getByText, history } = renderWithRouter(
      <Button label="Edit Profile" to="/edit-profile" />
    );

    fireEvent.click(getByText("Edit Profile"));
    expect(history.location.pathname).toBe("/edit-profile");
  });
});
