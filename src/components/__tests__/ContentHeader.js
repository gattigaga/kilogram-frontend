import React from "react";
import { fireEvent } from "react-testing-library";

import ContentHeader from "../ContentHeader";
import { renderWithRouter } from "../../helpers/testing";

describe("ContentHeader", () => {
  it("should render correctly", () => {
    const { getByText, getByAltText } = renderWithRouter(
      <ContentHeader
        to="/eric"
        username="eric.chef"
        avatar="https://via.placeholder.com/64x64"
      />
    );

    getByText("eric.chef");
    getByAltText("eric.chef");
  });
});
