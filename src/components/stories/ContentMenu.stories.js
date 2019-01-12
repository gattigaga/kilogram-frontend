import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart as fasHeart,
  faBookmark as fasBookmark
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faComment as farComment,
  faBookmark as farBookmark
} from "@fortawesome/free-regular-svg-icons";

import ContentMenu from "../ContentMenu";

library.add([fasHeart, fasBookmark, farHeart, farComment, farBookmark]);

storiesOf("ContentMenu", module)
  .add("default", () => (
    <ContentMenu
      onClickLike={action("liked")}
      onClickComment={action("commented")}
      onClickBookmark={action("bookmarked")}
    />
  ))
  .add("is liked", () => (
    <ContentMenu
      onClickLike={action("liked")}
      onClickComment={action("commented")}
      onClickBookmark={action("bookmarked")}
      isLiked
    />
  ))
  .add("is bookmarked", () => (
    <ContentMenu
      onClickLike={action("liked")}
      onClickComment={action("commented")}
      onClickBookmark={action("bookmarked")}
      isBookmarked
    />
  ));
