import React from "react";
import { fireEvent, render } from "react-testing-library";

import ContentFooter from "../ContentFooter";

describe("ContentHeader", () => {
  it("should render correctly and clickable", () => {
    const onClick = jest.fn();
    const { queryByText, getByTestId } = render(
      <ContentFooter onClick={onClick} />
    );

    fireEvent.click(getByTestId("container"));

    getByTestId("timestamp");

    expect(queryByText(/comment/i)).toBeNull();
    expect(onClick).toBeCalled();
  });

  it("should render with a comment", () => {
    const { getByText, getByTestId } = render(
      <ContentFooter totalComments={1} />
    );

    getByText(/View 1 comment/i);
    getByTestId("timestamp");
  });

  it("should render with much comments", () => {
    const { getByText, getByTestId } = render(
      <ContentFooter totalComments={14235} />
    );

    getByText(/View all 14,235 comments/i);
    getByTestId("timestamp");
  });
});
