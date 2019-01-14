import React from "react";
import PropTypes from "prop-types";

import Content from "./Content";

const ContentList = ({
  items,
  onClickItem,
  onClickLike,
  onClickComment,
  onClickBookmark
}) => (
  <div>
    {items.map(item => (
      <Content
        key={item.id}
        {...item}
        onClick={() => onClickItem(item.id)}
        onClickLike={() => onClickLike(item.id)}
        onClickComment={() => onClickComment(item.id)}
        onClickBookmark={() => onClickBookmark(item.id)}
      />
    ))}
  </div>
);

ContentList.propTypes = {
  items: PropTypes.array,
  onClickItem: PropTypes.func,
  onClickLike: PropTypes.func,
  onClickComment: PropTypes.func,
  onClickBookmark: PropTypes.func
};

export default ContentList;
