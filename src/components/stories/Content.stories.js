import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router-dom";
import { addDays } from "date-fns";

import Content from "../Content";
import imgAvatar from "../../assets/images/avatar.jpeg";
import imgSteak from "../../assets/images/steak.jpeg";

storiesOf("Content", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <Content
      avatar={imgAvatar}
      username="eric.chef"
      image={imgSteak}
      totalLikes={13244}
      totalComments={1322}
      text="I have a love affair with barbecue ribs, especially baby back ribs. I don’t usually write product reviews, but when I find something that I find especially good, useful, or handy, I want to share the information. Just recently, I discovered just such an item. Believe it or not, it’s barbecue ribs made by Lloyds BBQ. @beefresto #meat #grilled"
      timestamp={addDays(new Date(), -2)}
      onClick={action("clicked")}
      onClickLike={action("liked")}
      onClickComment={action("commented")}
      onClickBookmark={action("bookmarked")}
    />
  ));
