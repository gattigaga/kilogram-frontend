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
import styled from "styled-components";
import "normalize.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

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

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => (
  <Router>
    <Container>
      <Route path="/" component={Home} exact />
      <Route path="/@:username" component={Profile} />
      <Route path="/notifications" component={Notifications} />
    </Container>
  </Router>
);

export default App;
