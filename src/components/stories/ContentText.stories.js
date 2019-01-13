import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router-dom";

import ContentText from "../ContentText";

storiesOf("ContentText", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ContentText
      username="eric.chef"
      text="This is delicious @beefresto #meat #grilled"
      onClick={action("clicked")}
    />
  ))
  .add("with likes", () => (
    <ContentText
      totalLikes={12500}
      username="eric.chef"
      text="This is delicious @beefresto #meat #grilled"
      onClick={action("clicked")}
    />
  ))
  .add("with long text", () => (
    <ContentText
      totalLikes={12500}
      username="eric.chef"
      text="I have a love affair with barbecue ribs, especially baby back ribs. I don’t usually write product reviews, but when I find something that I find especially good, useful, or handy, I want to share the information. Just recently, I discovered just such an item. Believe it or not, it’s barbecue ribs made by Lloyds BBQ. @beefresto #meat #grilled"
      onClick={action("clicked")}
    />
  ));
