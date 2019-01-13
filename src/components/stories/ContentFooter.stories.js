import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { addDays } from "date-fns";

import ContentFooter from "../ContentFooter";

storiesOf("ContentFooter", module)
  .add("default", () => (
    <ContentFooter
      timestamp={addDays(new Date(), -2)}
      onClick={action("clicked")}
    />
  ))
  .add("with 1 comment", () => (
    <ContentFooter
      timestamp={addDays(new Date(), -2)}
      totalComments={1}
      onClick={action("clicked")}
    />
  ))
  .add("with much comments", () => (
    <ContentFooter
      timestamp={addDays(new Date(), -2)}
      totalComments={14357}
      onClick={action("clicked")}
    />
  ))
  .add("in a month", () => (
    <ContentFooter
      timestamp={addDays(new Date(), -7)}
      totalComments={14357}
      onClick={action("clicked")}
    />
  ))
  .add("after a month", () => (
    <ContentFooter
      timestamp={addDays(new Date(), -40)}
      totalComments={14357}
      onClick={action("clicked")}
    />
  ));
