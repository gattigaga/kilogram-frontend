import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router-dom";

import ContentGrid from "../ContentGrid";
import imgSteak from "../../assets/images/steak.jpeg";

const items = [
  {
    id: "1",
    image: imgSteak
  },
  {
    id: "2",
    image: imgSteak
  },
  {
    id: "3",
    image: imgSteak
  },
  {
    id: "4",
    image: imgSteak
  }
];

storiesOf("ContentGrid", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ContentGrid
      items={items}
      onClickItem={id => action(`clicked - ${id}`)()}
    />
  ));
