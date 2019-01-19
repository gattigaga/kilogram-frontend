import React from "react";
import { fireEvent, render } from "react-testing-library";

import ContentGrid from "../ContentGrid";

const items = [
  {
    id: "1",
    image: "steak.jpeg"
  },
  {
    id: "2",
    image: "steak.jpeg"
  },
  {
    id: "3",
    image: "steak.jpeg"
  },
  {
    id: "4",
    image: "steak.jpeg"
  }
];

describe("ContentGrid", () => {
  it("should render correctly and clickable", () => {
    const onClickItem = jest.fn();
    const { getByTestId } = render(
      <ContentGrid items={items} onClickItem={onClickItem} />
    );

    fireEvent.click(getByTestId("item"));
    expect(onClickItem).toBeCalled();
  });
});
