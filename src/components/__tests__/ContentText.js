import React from "react";
import { fireEvent } from "react-testing-library";

import ContentText from "../ContentText";
import { renderWithRouter } from "../../helpers/testing";

describe("ContextText", () => {
  it("should render correctly and clickable", () => {
    const onClick = jest.fn();
    const {
      getByTestId,
      getByText,
      queryByText,
      queryByTestId
    } = renderWithRouter(
      <ContentText
        username="eric.chef"
        text="This is delicious @beefresto #meat #grilled"
        onClick={onClick}
      />
    );

    fireEvent.click(getByTestId("container"));

    getByText("eric.chef");
    getByText(/delicious/i);
    expect(queryByText("likes")).toBeNull();
    expect(queryByTestId("more")).toBeNull();
    expect(onClick).toBeCalled();
  });

  it("should has clickable username", () => {
    const onClick = jest.fn();
    const { getByText, queryByTestId, history } = renderWithRouter(
      <ContentText
        username="eric.chef"
        text="This is delicious @beefresto #meat #grilled"
        onClick={onClick}
      />
    );

    getByText("eric.chef");
    getByText(/delicious/i);
    expect(queryByTestId("more")).toBeNull();

    fireEvent.click(getByText("eric.chef"));
    expect(history.location.pathname).toBe("/@eric.chef");

    expect(onClick).not.toBeCalled();
  });

  it("should render with likes", () => {
    const { getByText, queryByTestId } = renderWithRouter(
      <ContentText
        totalLikes={12500}
        username="eric.chef"
        text="This is delicious @beefresto #meat #grilled"
      />
    );

    getByText("eric.chef");
    getByText(/delicious/i);
    getByText("12,500 likes");
    expect(queryByTestId("more")).toBeNull();
  });

  it("should render with long text", () => {
    const onClick = jest.fn();
    const { getByTestId, getByText, queryByTestId } = renderWithRouter(
      <ContentText
        totalLikes={144500}
        username="eric.chef"
        text="I have a love affair with barbecue ribs, especially baby back ribs. I don’t usually write product reviews, but when I find something that I find especially good, useful, or handy, I want to share the information. Just recently, I discovered just such an item. Believe it or not, it’s barbecue ribs made by Lloyds BBQ. @beefresto #meat #grilled"
        onClick={onClick}
      />
    );

    getByText("eric.chef");
    getByText(/barbecue ribs/i);
    getByText("144,500 likes");

    fireEvent.click(getByTestId("more"));

    expect(queryByTestId("more")).toBeNull();
    expect(onClick).not.toBeCalled();
  });

  it("should render with hashtag and username tag", () => {
    const onClick = jest.fn();
    const { getByText, queryByTestId, history } = renderWithRouter(
      <ContentText
        totalLikes={12500}
        username="eric.chef"
        text="This is delicious @beefresto #meat #grilled"
        onClick={onClick}
      />
    );

    getByText("eric.chef");
    getByText(/delicious/i);
    getByText("12,500 likes");
    expect(queryByTestId("more")).toBeNull();

    fireEvent.click(getByText("#meat"));
    expect(history.location.pathname).toBe("/hashtag/meat");

    fireEvent.click(getByText("@beefresto"));
    expect(history.location.pathname).toBe("/@beefresto");

    expect(onClick).not.toBeCalled();
  });
});
