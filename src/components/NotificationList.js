import React from "react";
import PropTypes from "prop-types";

import NotificationItem from "./NotificationItem";

const NotificationList = ({ items }) => (
  <div>
    {items.map(item => (
      <NotificationItem key={item.id} {...item} />
    ))}
  </div>
);

NotificationList.propTypes = {
  items: PropTypes.array
};

export default NotificationList;
