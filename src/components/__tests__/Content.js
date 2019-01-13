import React from "react";
import { fireEvent } from "react-testing-library";

import Content from "../Content";
import { renderWithRouter } from "../../helpers/testing";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: props => <span {...props} />
}));

jest.mock("../ContentHeader", () => () => <div data-testid="header" />);
jest.mock("../ContentMenu", () => () => <div data-testid="menu" />);
jest.mock("../ContentText", () => () => <div data-testid="text" />);
jest.mock("../ContentFooter", () => () => <div data-testid="footer" />);

describe("Content", () => {
  it("should render correctly and clickable", () => {
    const onClick = jest.fn();
    const { getByAltText, getByTestId } = renderWithRouter(
      <Content
        avatar="avatar.jpeg"
        username="eric.chef"
        image="steak.jpeg"
        text="I have a love affair with barbecue ribs, especially baby back ribs. I don’t usually write product reviews, but when I find something that I find especially good, useful, or handy, I want to share the information. Just recently, I discovered just such an item. Believe it or not, it’s barbecue ribs made by Lloyds BBQ. @beefresto #meat #grilled"
        timestamp={"2019-01-10T11:30:34.599Z"}
        onClick={onClick}
      />
    );

    getByTestId("header");
    getByTestId("menu");
    getByTestId("text");
    getByTestId("footer");

    fireEvent.click(getByAltText("@eric.chef"));

    expect(onClick).toBeCalled();
  });
});
