import React from "react";
import { fireEvent } from "react-testing-library";

import Avatar from "../Avatar";
import { renderWithRouter } from "../../helpers/testing";

describe("Avatar", () => {
  it("should render and click link", () => {
    const { getByAltText, history } = renderWithRouter(
      <Avatar
        to="/eric"
        alt="Eric"
        src="https://via.placeholder.com/64x64"
        size="64px"
      />
    );

    fireEvent.click(getByAltText("Eric"));
    expect(history.location.pathname).toBe("/eric");
  });
});
