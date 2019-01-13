import React from "react";
import { fireEvent } from "react-testing-library";

import ContentHeader from "../ContentHeader";
import { renderWithRouter } from "../../helpers/testing";

describe("ContentHeader", () => {
  it("should render correctly and clickable", () => {
    const { getByText, getByAltText, history } = renderWithRouter(
      <ContentHeader
        username="eric.chef"
        avatar="https://via.placeholder.com/64x64"
      />
    );

    fireEvent.click(getByText("eric.chef"));
    expect(history.location.pathname).toBe("/@eric.chef");

    history.replace("/");

    fireEvent.click(getByAltText("@eric.chef"));
    expect(history.location.pathname).toBe("/@eric.chef");
  });
});
