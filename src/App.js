import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome as fasHome,
  faHeart as fasHeart,
  faBookmark as fasBookmark,
  faSearch as fasSearch,
  faUser as fasUser
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faComment as farComment,
  faBookmark as farBookmark,
  faUser as farUser
} from "@fortawesome/free-regular-svg-icons";
import "normalize.css";

import Home from "./pages/Home";

library.add([
  // Solid
  fasHome,
  fasHeart,
  fasBookmark,
  fasSearch,
  fasUser,
  // Regular
  farHeart,
  farComment,
  farBookmark,
  farUser
]);

const App = () => (
  <Router>
    <Route path="/" component={Home} exact />
  </Router>
);

export default App;
