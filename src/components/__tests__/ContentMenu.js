import React from "react";
import { fireEvent, render } from "react-testing-library";

import ContentMenu from "../ContentMenu";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: props => <span {...props} />
}));

describe("ContentMenu", () => {
  it("should render correctly and able to click like, comment and bookmark button", () => {
    const onClickLike = jest.fn();
    const onClickComment = jest.fn();
    const onClickBookmark = jest.fn();

    const { getByTestId } = render(
      <ContentMenu
        onClickLike={onClickLike}
        onClickComment={onClickComment}
        onClickBookmark={onClickBookmark}
      />
    );

    fireEvent.click(getByTestId("like"));
    fireEvent.click(getByTestId("comment"));
    fireEvent.click(getByTestId("bookmark"));

    expect(onClickLike).toBeCalled();
    expect(onClickComment).toBeCalled();
    expect(onClickBookmark).toBeCalled();
  });
});
