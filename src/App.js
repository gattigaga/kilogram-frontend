import React from "react";
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

import Home from "./pages/Home";

library.add([fasHeart, fasBookmark, farHeart, farComment, farBookmark]);

const App = () => <Home />;

export default App;
